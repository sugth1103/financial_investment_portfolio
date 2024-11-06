# Financial investment Portfolio - Assignment - Sujith Joseph

This is the assignement about showing information of the financial reports and performance and can be able to create a new asset with help of a form.

## Get started

### Clone the repo

```shell
git clone https://github.com/sugth1103/financial_investment_portfolio.git
cd finance_portfolio
```
### start the json server for mock data
```shell
npx json-server db.json
```
it will start at port 3000 and will list all the mock services below
### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install ng
npm install
ng start -o
```
Default page will be the dashboard which has the graph of asset details and performance of the asset

Link Create asset data will direct you to a form where you can fill your asset details and it can be saved in db.json
The form has proper validation and the submit button will be enabled only when form fields has valid information

## auth token 
authentication token has been implemented with the help of app initializer and stored it is local storage.
