import React from 'react';
import { useParams } from 'react-router-dom';
import WaterFlushingForm from '../WaterFlushingForm';

const EditWaterFlushing = () => {
	const params = useParams();

	return (
		<WaterFlushingForm mode="EDIT" param={params}/>
	)
}

export default EditWaterFlushing
