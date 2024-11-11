const MotorSoloRunField = () => {

	const initialValues = {
		projectName: '',
		owner: '',
		identificationNo: '',
		system: '',
		subSystem: '',
		motorTagNo: '',
		tagDescription: '',
		motorType: '',
		startingTime: '',
		recordOfRotation: '',
		recordOfSpeed: '',
		remarks: '',
    
    // Flattened structure for `recordOfCurrent`
    recordOfCurrent: {
        rocR: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rocY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rocB: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },
    
    // Flattened structure for `recordOfTemperature`
    recordOfTemperature: {
        rotAmbient: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rotBearing: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rotFD: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rotFND: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },

    // Similar optimizations for `recordOfVibration`
    recordOfVibration: {
        rovX: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovXX: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovYY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
        rovXY: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },

    // Flatten `recordOfNoise`
    recordOfNoise: {
        ronDb: { 2: '', 10: '', 20: '', 30: '', 60: '', 90: '', 120: '' },
    },

    // Flatten `testInstrumentTools`
    testInstrumentTools: {
        speed: { M: '', Y: '', R: '' },
        ampere: { M: '', Y: '', R: '' },
        temp: { M: '', Y: '', R: '' },
        vib: { M: '', Y: '', R: '' },
    },
	}