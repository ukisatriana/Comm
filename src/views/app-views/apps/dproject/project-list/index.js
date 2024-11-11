import React, {useEffect, useState} from 'react'
import { Card, Table, Input, Button, Menu, message } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'


const ProjectList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('project');
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
	
	const addProject = () => {
		navigate(`/app/apps/dproject/add-project`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/dproject/edit-project/${row.id}`)
	}
	
	const deleteRow = async row => {
		try {
		  await FirestoreService.deleteDocument('project', row.id);
		  message.success('Project deleted successfully');
		  setList(list.filter(item => item.id !== row.id));
		} catch (error) {
		  message.error('Error deleting Project: ' + error.message);
		}
	  };

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
			title: 'Project Name',
			dataIndex: 'projectName',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectName')
		},
		{
			title: 'Project Location',
			dataIndex: 'projectLocation',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectLocation')
		},
		{
			title: 'Project Type',
			dataIndex: 'projectType',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectType')
		},
		{
			title: 'Owner',
			dataIndex: 'owner',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'owner')
		},
		{
			title: 'Contractor',
			dataIndex: 'contractor',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'contractor')
		},
		{
			title: 'Subcontractor',
			dataIndex: 'subcontractor',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'subcontractor')
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
	// 	const searchArray = e.currentTarget.value? list : projectData
	// 	const data = utils.wildCardSearch(searchArray, value)
	// 	setList(data)
	// 	setSelectedRowKeys([])
	// }


	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					{/* <div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div> */}
					
				</Flex>
				<div>
					<Button onClick={addProject} type="primary" icon={<PlusCircleOutlined />} block>Add Project</Button>
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

export default ProjectList
