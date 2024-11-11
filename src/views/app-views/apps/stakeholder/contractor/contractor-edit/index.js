import React from 'react'
import { useParams } from 'react-router-dom';
import ContractorForm from '../ContractorForm';

const EditContractor = () => {
	const params = useParams();

	return (
		<ContractorForm mode="EDIT" param={params}/>
	)
}

export default EditContractor
