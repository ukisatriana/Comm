import { DashboardOutlined,
   BulbOutlined,
   CompressOutlined,
   FolderOutlined,
   DeploymentUnitOutlined,
   CodepenOutlined,
   SolutionOutlined,
   SettingOutlined,
   UserOutlined,
   TeamOutlined,
  //  ShoppingCartOutlined
  
 } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

//Nav Awal
const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'project',
      path: `${APP_PREFIX_PATH}/apps/dproject/project-list`,
      title: 'sidenav.apps.doc.project',
      icon: BulbOutlined,
      breadcrumb: true,
      submenu: [

        // {
        //   key: 'project1',
        //   path: `${APP_PREFIX_PATH}/apps/dproject/project-list`,
        //   title: 'sidenav.apps.doc.project',
        //   icon: BulbOutlined,
        //   breadcrumb: true,
        //   submenu: []
        // },

        // {
        //   key: 'addProject',
        //   path: `${APP_PREFIX_PATH}/apps/dproject/add-project`,
        //   title: 'sidenav.apps.doc.project.addProject',
        //   icon: BulbOutlined,
        //   breadcrumb: false,
        //   submenu: []
        // },


      ]
    },
  ]
}]
//nav Document Engineering
const docNavTree = [{
  key: 'document',
  path: `${APP_PREFIX_PATH}/apps`,
  title: 'sidenav.documents',
  icon: FolderOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'engineering',
      path: `${APP_PREFIX_PATH}/apps/documents`,
      title: 'sidenav.documents.engineering',
      icon: CompressOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'engineerdoc',
          path: `${APP_PREFIX_PATH}/apps/documents/engineering-doc/doc-eng-list`,
          title: 'sidenav.documents.engineering.docs',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'engineertechdoc',
          path: `${APP_PREFIX_PATH}/apps/documents/engineering-tech/eng-tech-list`,
          title: 'sidenav.documents.engineering.tech',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },

    
//ecome
    // {
    //   key: 'apps-ecommerce',
    //   path: `${APP_PREFIX_PATH}/apps/ecommerce`,
    //   title: 'sidenav.apps.ecommerce',
    //   icon: ShoppingCartOutlined,
    //   breadcrumb: true,
    //   submenu: [
    //     {
    //       key: 'apps-ecommerce-productList',
    //       path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
    //       title: 'sidenav.apps.ecommerce.productList',
    //       icon: '',
    //       breadcrumb: true,
    //       submenu: []
    //     },
    //     {
    //       key: 'apps-ecommerce-addProduct',
    //       path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
    //       title: 'sidenav.apps.ecommerce.addProduct',
    //       icon: '',
    //       breadcrumb: false,
    //       submenu: []
    //     },
    //     {
    //       key: 'apps-ecommerce-editProduct',
    //       path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/12`,
    //       title: 'sidenav.apps.ecommerce.editProduct',
    //       icon: '',
    //       breadcrumb: false,
    //       submenu: []
    //     },
    //     {
    //       key: 'apps-ecommerce-orders',
    //       path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
    //       title: 'sidenav.apps.ecommerce.orders',
    //       icon: '',
    //       breadcrumb: false,
    //       submenu: []
    //     }
    //   ]
    // },

  
//Nav Procurment
    {
      key: 'procurment',
      path: `${APP_PREFIX_PATH}/apps/documents`,
      title: 'sidenav.procurment',
      icon: DeploymentUnitOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dataProcurment',
          path: `${APP_PREFIX_PATH}/apps/documents/procurment/procurment-list`,
          title: 'sidenav.procurment.vendor',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
       
      ]
    },
//Nav Construction
    {
      key: 'construction',
      path: `${APP_PREFIX_PATH}/apps/documents/construction`,
      title: 'sidenav.construction',
      icon: CodepenOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'qctestreport',
          path: `${APP_PREFIX_PATH}/apps/documents/construction/qc-test-report/qc-test-report-list`,
          title: 'sidenav.construction.qctest',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'constestreport',
          path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-test-report/cons-test-report-list`,
          title: 'sidenav.construction.constestreport',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'conspunchlist',
          path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-punch/cons-punch-list`,
          title: 'sidenav.construction.conspunchlist',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },

//Nav Comissioning

    {
      key: 'commsioning',
      path: `${APP_PREFIX_PATH}/apps/documents/commisioning`,
      title: 'sidenav.commisioning',
      icon: SolutionOutlined ,
      breadcrumb: false,
      submenu: [
        {
          key: 'airblowing',
          path: `${APP_PREFIX_PATH}/apps/documents/commisioning/air-blowing/air-blowing-list`,
          title: 'sidenav.commisioning.airblowing',
          icon: '',
          breadcrumb: true,
          submenu: [
            // {
            //   key: 'airblowing.review',
            //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/air-review/air-blowing-review`,
            //   title: 'sidenav.commisioning.airblowing.detail',
            //   icon: '',
            //   breadcrumb: true,
            //   submenu: []
            // },
          ]
        },
        // {
        //   key: 'chemicalcleaning',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/chemical-cleaning`,
        //   title: 'sidenav.commisioning.chemicalcleaning',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        // {
        //   key: 'dryruntest',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/dry-run-test`,
        //   title: 'sidenav.commisioning.dry_run_test',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        // {
        //   key: 'flangemanage',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/flange-manage`,
        //   title: 'sidenav.commisioning.flange_manage',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        // {
        //   key: 'leaktest',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/leak-test`,
        //   title: 'sidenav.commisioning.leak_test',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        //     {
        //       key: 'loopandfunctiontest',
        //       path: `${APP_PREFIX_PATH}/apps/documents/commisioning/loop-funtion`,
        //       title: 'sidenav.commisioning.loop_function',
        //       icon: '',
        //       breadcrumb: true,
        //       submenu: [
        //         {
        //         key: 'analogtest',
        //         path: `${APP_PREFIX_PATH}/apps/documents/commisioning/analog-test`,
        //         title: 'sidenav.commisioning.analog_test',
        //         icon: '',
        //         breadcrumb: true,
        //         submenu: []
        //       },
        //       {
        //         key: 'digitaltest',
        //         path: `${APP_PREFIX_PATH}/apps/documents/commisioning/digital-test`,
        //         title: 'sidenav.commisioning.digital_test',
        //         icon: '',
        //         breadcrumb: true,
        //         submenu: []
        //       },
        //       {
        //         key: 'communicationtest',
        //         path: `${APP_PREFIX_PATH}/apps/documents/commisioning/communication-test`,
        //         title: 'sidenav.commisioning.communication_test',
        //         icon: '',
        //         breadcrumb: true,
        //         submenu: []
        //       },
        //       {
        //         key: 'controllogictest',
        //         path: `${APP_PREFIX_PATH}/apps/documents/commisioning/control-logic-test`,
        //         title: 'sidenav.commisioning.control_logic_test',
        //         icon: '',
        //         breadcrumb: true,
        //         submenu: []
        //       },
        //       {
        //         key: 'esdtest',
        //         path: `${APP_PREFIX_PATH}/apps/documents/commisioning/esd-test`,
        //         title: 'sidenav.commisioning.esd_test',
        //         icon: '',
        //         breadcrumb: true,
        //         submenu: []
        //       },
        //       {
        //         key: 'fireandgas',
        //         path: `${APP_PREFIX_PATH}/apps/documents/commisioning/fire-and-gas`,
        //         title: 'sidenav.commisioning.fire_gas_logic_test',
        //         icon: '',
        //         breadcrumb: true,
        //         submenu: []
        //       },
        //       ]
        //     },
        {
          key: 'motorsolorun',
          path: `${APP_PREFIX_PATH}/apps/documents/commisioning/motor-solo-run/motor-solo-run-list`,
          title: 'sidenav.commisioning.motor_solo_run',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        // {
        //   key: 'pipelinecleaning',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-list`,
        //   title: 'sidenav.commisioning.pipeline_cleaning',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        // {
        //   key: 'pipelinegauging',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pipeline-gauging/pipeline-gauging-list`,
        //   title: 'sidenav.commisioning.pipeline_gauging',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        // {
        //   key: 'pumpmechanicalrun',
        //   path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pump-mechanical-run`,
        //   title: 'sidenav.commisioning.pump_mechanical_run',
        //   icon: '',
        //   breadcrumb: true,
        //   submenu: []
        // },
        {
          key: 'waterflushing',
          path: `${APP_PREFIX_PATH}/apps/documents/commisioning/water-flushing/Water-flushing-list`,
          title: 'sidenav.commisioning.water_flushing',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
   

  ]
}]

//nav setting
const settingNavTree = [{
  key: 'setting',
  path: `${APP_PREFIX_PATH}/apps/users/`,
  title: 'sidenav.setting',
  icon: SettingOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'users',
      path: `${APP_PREFIX_PATH}/apps/users/user-list`,
      title: 'sidenav.setting.users',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'stakeholder',
      path: `${APP_PREFIX_PATH}/apps/stakeholder`,
      title: 'sidenav.setting.stakeholder',
      icon: TeamOutlined,
      breadcrumb: false,
      submenu: [
                  {
                    key: 'owner',
                    path: `${APP_PREFIX_PATH}/apps/stakeholder/owner/owner-list`,
                    title: 'sidenav.setting.owner',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                  },
                  {
                    key: 'contractor',
                    path: `${APP_PREFIX_PATH}/apps/stakeholder/contractor/contractor-list`,
                    title: 'sidenav.setting.contractor',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                  },
                  {
                    key: 'subcontractor',
                    path: `${APP_PREFIX_PATH}/apps/stakeholder/subcontractor/subcontractor-list`,
                    title: 'sidenav.setting.subcontractor',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                  },

      ]
    },
  ]
}]




const navigationConfig = [
  ...dashBoardNavTree,
  ...docNavTree,
  ...settingNavTree
]

export default navigationConfig;
