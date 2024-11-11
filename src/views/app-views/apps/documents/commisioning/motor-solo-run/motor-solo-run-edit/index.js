import React from 'react';
import { useParams } from 'react-router-dom';
import MotorSoloRunForm from '../MotorSoloRunForm';

const EditMotorSoloRun = () => {
	const params = useParams();

	return (
		<MotorSoloRunForm mode="EDIT" param={params}/>
	)
}

export default EditMotorSoloRun
