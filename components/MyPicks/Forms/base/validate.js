import * as yup from 'yup';

yup.addMethod(yup.array, "checkDupes", function (message, half) {
  return this.test("checkDupes", message, function (list) {
    const mapper = x => x.team_id;
    const entries = half === 1 ? list.slice(0, 19).map(mapper).filter(Boolean) :
      list.slice(19, 39).map(mapper).filter(Boolean)
    const set = [...new Set(entries)];
    const isUnique = entries.length === set.length;
    if (isUnique) {
      return true;
    }

    const idx = entries.findIndex((l, i) => mapper(l) !== set[i]);
    return this.createError({
      path: `picks[${idx}].team_id`,
      message: message,
    });
  });
});
export const validationSchema = yup.object().shape({
  picks:
    yup.array()
      .of(
        yup.object().shape({
          matchday: yup.number(),
          team_id: yup.string(),
        })
      )
      .checkDupes('duplicate pick in first half', 1)
      .checkDupes('duplicate pick in second half', 2)
})