import React from 'react';
import { useParams } from 'react-router-dom';
import AirBlowingForm from '../AirBlowingForm';

const EditAirBlowing = () => {
	const params = useParams();

	return (
		<AirBlowingForm mode="EDIT" param={params}/>
	)
}

export default EditAirBlowing
