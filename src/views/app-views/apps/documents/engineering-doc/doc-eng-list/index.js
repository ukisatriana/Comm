import React, { useState, useEffect } from 'react'
import { Card, Table, Button, Menu, } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'
 

const DocEngList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('engineeringDocs');
				setList(documents);
			} catch (error) {
				console.log('Error fetching documents: ', error.message);
			}
		};
		fetchData();
	}
	, []);

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EditOutlined />
					<span className="ml-2">Edit</span>
				</Flex>
			</Menu.Item>
			<Menu.Item onClick={() => deleteRow(row)}>
				<Flex alignItems="center">
					<DeleteOutlined />
					<span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const addDoceng = () => {
		navigate(`/app/apps/documents/engineering-doc/doc-eng-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/documents/engineering-doc/doc-eng-edit/${row.id}`)
	}
	
	const deleteRow = row => {
		const objKey = 'id'
		let data = list
		if(selectedRows.length > 1) {
			selectedRows.forEach(elm => {
				data = utils.deleteArrayRow(data, objKey, elm.id)
				setList(data)
				setSelectedRows([])
			})
		} else {
			data = utils.deleteArrayRow(data, objKey, row.id)
			setList(data)
		}
	}

	const tableColumns = [
		// {
		// 	title: 'ID',
		// 	dataIndex: 'id'
		// },
		{
			title: 'ID',
			dataIndex: 'id',
			render: (text, record, index) => index + 1

		},
		{
			title: 'Engineering Document Name',
			dataIndex: 'engineeringDocsName',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'engineeringDocsName')
		},
		{
			title: 'Project Name',
			dataIndex: 'projectName',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectName')
		},
		{
			title: 'File Doc',
			dataIndex: 'documentURL',

			render: (url) => (
				<a href={url} target="_blank" rel="noopener noreferrer" download>
				  View File
				</a>
			  ),
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'documentURL')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	// const onSearch = e => {
	// 	const value = e.currentTarget.value
	// 	const searchArray = e.currentTarget.value? list : ProductListData
	// 	const data = utils.wildCardSearch(searchArray, value)
	// 	setList(data)
	// 	setSelectedRowKeys([])
	// } 

	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						{/* <Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/> */}
					</div>
				</Flex>
				<div>
					<Button onClick={addDoceng} type="primary" icon={<PlusCircleOutlined />} block>Add Document</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default DocEngList