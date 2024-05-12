/* Amplify Params - DO NOT EDIT
	API_VICTORY_GRAPHQLAPIENDPOINTOUTPUT
	API_VICTORY_GRAPHQLAPIIDOUTPUT
	API_VICTORY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const environment = process.env.ENV;
const region = process.env.REGION;
const apiGraphQLAPIIdOutput = process.env.API_VICTORY_GRAPHQLAPIIDOUTPUT;
const memberTableName = `Member-${apiGraphQLAPIIdOutput}-${environment}`;
const instituteTableName = `Institute-${apiGraphQLAPIIdOutput}-${environment}`;
const tournamentTableName = `Tournament-${apiGraphQLAPIIdOutput}-${environment}`;
AWS.config.update({region: region});
const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const tableNames = [instituteTableName, memberTableName, tournamentTableName];
    
    try {
        const countPromises = tableNames.map(async (tableName) => {
            const scanParams = {
                TableName: tableName
            };

            const scanResult = await documentClient.scan(scanParams).promise();
            return scanResult.Count;
        });

        const counts = await Promise.all(countPromises);
        return counts;
    } catch (error) {
        console.error('Error:', error);
        return error;
    }
};
