import React from 'react'
import { useParams } from 'react-router-dom';
import ConsTestReporForm from '../ConsTestReportForm';

const EditProduct = () => {
	const params = useParams();

	return (
		<ConsTestReporForm mode="EDIT" param={params}/>
	)
}

export default EditProduct
