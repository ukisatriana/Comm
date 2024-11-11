import React from 'react'
import { useParams } from 'react-router-dom';
import SubcontractorForm from '../SubcontractorForm';

const EditSubcontractor = () => {
	const params = useParams();

	return (
		<SubcontractorForm mode="EDIT" param={params}/>
	)
}

export default EditSubcontractor
