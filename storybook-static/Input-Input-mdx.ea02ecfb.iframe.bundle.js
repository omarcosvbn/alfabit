(self.webpackChunkalfabit=self.webpackChunkalfabit||[]).push([[690,856],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./components/Input/Input.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_mvini_Desktop_Projetos_alfabit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Input/Input.stories.ts");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h3:"h3",...(0,C_Users_mvini_Desktop_Projetos_alfabit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"input",children:"Input"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary-disabled",children:"Primary disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.PrimaryDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multiline",children:"Multiline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Multiline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multiline-disabled",children:"Multiline disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.MultilineDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary-with-label",children:"Primary with label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.PrimaryLabel}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary-with-label-disabled",children:"Primary with label disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.PrimaryLabelDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multiline-with-label-disabled",children:"Multiline with label disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.MultilineLabelDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"interactive-docs",children:"Interactive docs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_Users_mvini_Desktop_Projetos_alfabit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./components/Input/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiline:()=>Multiline,MultilineDisabled:()=>MultilineDisabled,MultilineLabel:()=>MultilineLabel,MultilineLabelDisabled:()=>MultilineLabelDisabled,Primary:()=>Primary,PrimaryDisabled:()=>PrimaryDisabled,PrimaryLabel:()=>PrimaryLabel,PrimaryLabelDisabled:()=>PrimaryLabelDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const TextOrInput=props=>props.multiline?(0,jsx_runtime.jsx)("textarea",{...props}):(0,jsx_runtime.jsx)("input",{...props});function Input({label,className,...rest}){return(0,jsx_runtime.jsxs)("div",{className:"relative",children:[label&&(0,jsx_runtime.jsx)("label",{className:"absolute pt-1 pl-3 text-xs",children:label}),(0,jsx_runtime.jsx)(TextOrInput,{className:`\n        bg-dark text-gray-primary rounded-md p-3\n        disabled:bg-disabled disabled:border-2 disabled:border-disabled\n        ${label&&"pt-5"}\n        ${className}`,...rest})]})}Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},multiline:{required:!1,tsType:{name:"boolean"},description:""}}};const Input_stories={title:"Design System/Molecules/Input",component:Input,argTypes:{value:{type:"string"},label:{type:"string"},multiline:{type:"boolean"},disabled:{type:"boolean"}}},Primary={args:{value:"Input"}},Multiline={args:{value:"Input",multiline:!0}},PrimaryDisabled={args:{value:"Input",disabled:!0}},MultilineDisabled={args:{value:"Input",multiline:!0,disabled:!0}},PrimaryLabel={args:{value:"Input",label:"Label"}},PrimaryLabelDisabled={args:{value:"Input",label:"Label",disabled:!0}},MultilineLabel={args:{value:"Input",label:"Label",multiline:!0}},MultilineLabelDisabled={args:{value:"Input",label:"Label",multiline:!0,disabled:!0}},__namedExportsOrder=["Primary","Multiline","PrimaryDisabled","MultilineDisabled","PrimaryLabel","PrimaryLabelDisabled","MultilineLabel","MultilineLabelDisabled"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input'\n  }\n}",...Primary.parameters?.docs?.source}}},Multiline.parameters={...Multiline.parameters,docs:{...Multiline.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    multiline: true\n  }\n}",...Multiline.parameters?.docs?.source}}},PrimaryDisabled.parameters={...PrimaryDisabled.parameters,docs:{...PrimaryDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    disabled: true\n  }\n}",...PrimaryDisabled.parameters?.docs?.source}}},MultilineDisabled.parameters={...MultilineDisabled.parameters,docs:{...MultilineDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    multiline: true,\n    disabled: true\n  }\n}",...MultilineDisabled.parameters?.docs?.source}}},PrimaryLabel.parameters={...PrimaryLabel.parameters,docs:{...PrimaryLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    label: 'Label'\n  }\n}",...PrimaryLabel.parameters?.docs?.source}}},PrimaryLabelDisabled.parameters={...PrimaryLabelDisabled.parameters,docs:{...PrimaryLabelDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    label: 'Label',\n    disabled: true\n  }\n}",...PrimaryLabelDisabled.parameters?.docs?.source}}},MultilineLabel.parameters={...MultilineLabel.parameters,docs:{...MultilineLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    label: 'Label',\n    multiline: true\n  }\n}",...MultilineLabel.parameters?.docs?.source}}},MultilineLabelDisabled.parameters={...MultilineLabelDisabled.parameters,docs:{...MultilineLabelDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Input',\n    label: 'Label',\n    multiline: true,\n    disabled: true\n  }\n}",...MultilineLabelDisabled.parameters?.docs?.source}}}}}]);