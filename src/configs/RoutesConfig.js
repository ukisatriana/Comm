import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    },
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    //project
    {
        key: 'apps.doc.project',
        path: `${APP_PREFIX_PATH}/apps/dproject/project-list`,
        component: React.lazy(() => import('views/app-views/apps/dproject/project-list')),
    },
    {
        key: 'apps.doc.project.add-project',
        path: `${APP_PREFIX_PATH}/apps/dproject/add-project`,
        component: React.lazy(() => import('views/app-views/apps/dproject/add-project')),
    },
    {
        key: 'apps.doc.project.edit-project',
        path: `${APP_PREFIX_PATH}/apps/dproject/edit-project/:id`,
        component: React.lazy(() => import('views/app-views/apps/dproject/edit-project')),
    },
    

    // {
    //     key: 'apps.ecommerce',
    //     path: `${APP_PREFIX_PATH}/apps/ecommerce`,
    //     component: React.lazy(() => import('views/app-views/apps/e-commerce')),
    // },
    // {
    //     key: 'apps.ecommerce.add-product',
    //     path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
    //     component: React.lazy(() => import('views/app-views/apps/e-commerce/add-product')),
    // },
    // {
    //     key: 'apps.ecommerce.edit-product',
    //     path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/:id`,
    //     component: React.lazy(() => import('views/app-views/apps/e-commerce/edit-product')),
    // },
    // {
    //     key: 'apps.ecommerce.product-list',
    //     path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
    //     component: React.lazy(() => import('views/app-views/apps/e-commerce/product-list')),
    // },
    // {
    //     key: 'apps.ecommerce.orders',
    //     path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
    //     component: React.lazy(() => import('views/app-views/apps/e-commerce/orders')),
    // },
    // {
    //     key: 'apps.cobadong',
    //     path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
    //     component: React.lazy(() => import('views/app-views/apps/e-commerce/orders')),
    // },





    //Doc Engieering
    {
        key: 'documents.engineering.docs',
        path: `${APP_PREFIX_PATH}/apps/documents/engineering-doc/doc-eng-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/engineering-doc/doc-eng-list')),
    },
    {
        key: 'documents.engineering.docs-eng-add',
        path: `${APP_PREFIX_PATH}/apps/documents/engineering-doc/doc-eng-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/engineering-doc/doc-eng-add')),
    },
    {
        key: 'documents.engineering.docs-eng-edit',
        path: `${APP_PREFIX_PATH}/apps/documents/engineering-doc/doc-eng-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/engineering-doc/doc-eng-edit')),
    },

    //engineeringTech
    {
        key: 'documents.engineering.tech',
        path: `${APP_PREFIX_PATH}/apps/documents/engineering-tech/eng-tech-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/engineering-tech/eng-tech-list')),
    },
    {
        key: 'documents.engineering.eng-tech-add',
        path: `${APP_PREFIX_PATH}/apps/documents/engineering-tech/eng-tech-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/engineering-tech/eng-tech-add')),
    },
    {
        key: 'documents.engineering.eng-tech-edit',
        path: `${APP_PREFIX_PATH}/apps/documents/engineering-tech/eng-tech-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/engineering-tech/eng-tech-edit')),
    },
    
    //Procurment
    {
        key: 'procurment.vendor',
        path: `${APP_PREFIX_PATH}/apps/documents/procurment/procurment-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/procurment/procurment-list')),
    },
    {
        key: 'procurment.vendor.add',
        path: `${APP_PREFIX_PATH}/apps/documents/procurment/procurment-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/procurment/procurment-add')),
    },
    {
        key: 'procurment.vendor.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/procurment/procurment-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/procurment/procurment-edit')),
    },

    //Construction
    //qcTestReport
    {
        key: 'construction.qctest',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/qc-test-report/qc-test-report-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/qc-test-report/qc-test-report-list')),
    },
    {
        key: 'construction.qctest.add',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/qc-test-report/qc-test-report-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/qc-test-report/qc-test-report-add')),
    },
    {
        key: 'construction.qctest.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/qc-test-report/qc-test-report-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/qc-test-report/qc-test-report-edit')),
    },

    //consTestReport
    {
        key: 'construction.constestreport',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-test-report/cons-test-report-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/cons-test-report/cons-test-report-list')),
    },
    {
        key: 'construction.constestreport.add',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-test-report/cons-test-report-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/cons-test-report/cons-test-report-add')),
    },
    {
        key: 'construction.constestreport.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-test-report/cons-test-report-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/cons-test-report/cons-test-report-edit')),
    },

    //consPunchList
    {
        key: 'construction.conspunchlist',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-punch/cons-punch-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/cons-punch/cons-punch-list')),
    },
    {
        key: 'construction.conspunchlist.add',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-punch/cons-punch-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/cons-punch/cons-punch-add')),
    },
    {
        key: 'construction.conspunchlist.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/construction/cons-punch/cons-punch-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/construction/cons-punch/cons-punch-edit')),
    },


    //Commissioning
    //airBlowing
    {
        key: 'commisioning.airblowing',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/air-blowing/air-blowing-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/air-blowing/air-blowing-list')),
    },
    {
        key: 'commisioning.airblowing.add',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/air-blowing/air-blowing-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/air-blowing/air-blowing-add')),
    },
    {
        key: 'commisioning.airblowing.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/air-blowing/air-blowing-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/air-blowing/air-blowing-edit')),
    },
    {
        key: 'commisioning.airblowing.detail',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/air-blowing/air-blowing-detail:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/air-blowing/air-blowing-detail')),
    },

    //pipeLineCleaning
    {
        key: 'commisioning.pipeline_cleaning',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-list')),
    },
    {
        key: 'commisioning.pipeline_cleaning.add',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-add')),
    },
    {
        key: 'commisioning.pipeline_cleaning.detail',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-detail`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/pipeline-cleaning/pipeline-cleaning-detail')),
    },

    //pipeLineGauging
    {
        key: 'commisioning.pipeline_gauging',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/pipeline-gauging/pipeline-gauging-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/pipeline-gauging/pipeline-gauging-list')),
    },

    //waterFlushing
    {
        key: 'commisioning.waterflushing',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/water-flushing/Water-flushing-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/water-flushing/water-flushing-list')),
    },
    {
        key: 'commisioning.waterflushing.add',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/water-flushing/Water-flushing-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/water-flushing/water-flushing-add')),
    },
    {
        key: 'commisioning.waterflushing.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/water-flushing/Water-flushing-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/water-flushing/water-flushing-edit')),
    },
    {
        key: 'commisioning.waterflushing.detail',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/water-flushing/Water-flushing-detail`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/water-flushing/water-flushing-detail')),
    },


    //motorSoloRun
    {
        key: 'commisioning.motor_solo_run',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/motor-solo-run/motor-solo-run-list`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/motor-solo-run/motor-solo-run-list')),
    },
    {
        key: 'commisioning.motor_solo_run.add',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/motor-solo-run/motor-solo-run-add`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/motor-solo-run/motor-solo-run-add')),
    },
    {
        key: 'commisioning.motor_solo_run.edit',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/motor-solo-run/motor-solo-run-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/motor-solo-run/motor-solo-run-edit')),
    },
    {
        key: 'commisioning.motor_solo_run.detail',
        path: `${APP_PREFIX_PATH}/apps/documents/commisioning/motor-solo-run/motor-solo-run-detail`,
        component: React.lazy(() => import('views/app-views/apps/documents/commisioning/motor-solo-run/motor-solo-run-detail')),
    },



    //users & stakeholder
    {
        key: 'setting.users',
        path: `${APP_PREFIX_PATH}/apps/users/user-list`,
        component: React.lazy(() => import('views/app-views/apps/users/user-list')),
    },
    {
        key: 'setting.users.add',
        path: `${APP_PREFIX_PATH}/apps/users/user-add`,
        component: React.lazy(() => import('views/app-views/apps/users/user-add')),   
    },
    {
        key: 'setting.users.edit',
        path: `${APP_PREFIX_PATH}/apps/users/user-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/users/user-edit')),   
    },


    //Owner
    {
        key: 'setting.owner',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/owner/owner-list`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/owner/owner-list')),
    },
    {
        key: 'setting.owner.add',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/owner/owner-add`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/owner/owner-add')),   
    },
    {
        key: 'setting.owner.edit',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/owner/owner-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/owner/owner-edit')),   
    },

    //Contractor
    {
        key: 'setting.contractor',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/contractor/contractor-list`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/contractor/contractor-list')),
    },
    {
        key: 'setting.contractor.add',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/contractor/contractor-add`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/contractor/contractor-add')),
    },
    {
        key: 'setting.contractor.edit',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/contractor/contractor-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/contractor/contractor-edit')),
    },
    //Subcontractor
    {
        key: 'setting.subcontractor',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/subcontractor/subcontractor-list`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/subcontractor/subcontractor-list')),
    },
    {
        key: 'setting.subcontractor.add',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/subcontractor/subcontractor-add`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/subcontractor/subcontractor-add')),
    },
    {
        key: 'setting.subcontractor.edit',
        path: `${APP_PREFIX_PATH}/apps/stakeholder/subcontractor/subcontractor-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/stakeholder/subcontractor/subcontractor-edit')),
    },
    

]


