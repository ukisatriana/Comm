import React from 'react'
import { useParams } from 'react-router-dom';
import EngTechForm from '../EngTechForm';

const EditEngTech = () => {
	const params = useParams();

	return (
		<EngTechForm mode="EDIT" param={params}/>
	)
}

export default EditEngTech
