import { useState, useRef, useEffect } from 'react'
import { Formik } from 'formik'

import MyPicksFields from '../../Fields'
import MyPicksSchedule from '../../Schedule'
import { TwoButtons } from 'components/Buttons'
import { validationSchema } from './validate'
import { MyPicksContainer, MpSubmitButton, MpForm } from './styled'

import { MyPicksContext, ScheduleDataContext } from '../../Context'

const MyPicksFormBase = ({ initialValues, scheduleData, submitFn }) => {
    const currentMDRef = useRef()
    const initHalf = scheduleData?.currentMatchday > 19 ? 1 : 0

    const [showHalf, setShowHalf] = useState(initHalf)
    const mpContextValue = {
        showHalf: showHalf,
        currentMatches: currentMDRef,
    }
    useEffect(() => {
        if (currentMDRef.current) currentMDRef.current.scrollIntoView()
    }, [])
    return (
        <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                picks: initialValues,
            }}
            onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true)
                submitFn(data)
                setSubmitting(false)
            }}
        >
            {({ values, handleSubmit, dirty, isValid, isSubmitting }) => (
                <MpForm onSubmit={handleSubmit}>
                    <TwoButtons
                        startLeft={initHalf === 0}
                        switchSide={setShowHalf}
                        buttonNames={['1st Half', '2nd Half']}
                    />
                    <MyPicksContainer>
                        {scheduleData && (
                            <>
                                <MyPicksContext.Provider value={mpContextValue}>
                                    <ScheduleDataContext.Provider
                                        value={scheduleData}
                                    >
                                        <MyPicksFields values={values} />
                                        <MyPicksSchedule />
                                    </ScheduleDataContext.Provider>
                                </MyPicksContext.Provider>
                            </>
                        )}
                    </MyPicksContainer>
                    <MpSubmitButton
                        type="submit"
                        disabled={!dirty || isSubmitting || !isValid}
                    >
                        Submit
                    </MpSubmitButton>
                </MpForm>
            )}
        </Formik>
    )
}

export default MyPicksFormBase
