/* Amplify Params - DO NOT EDIT
	API_VICTORY_GRAPHQLAPIENDPOINTOUTPUT
	API_VICTORY_GRAPHQLAPIIDOUTPUT
	API_VICTORY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');
const environment = process.env.ENV;
const region = process.env.REGION;
const apiGraphQLAPIIdOutput = process.env.API_VICTORY_GRAPHQLAPIIDOUTPUT;
const matchTableName = `Match-${apiGraphQLAPIIdOutput}-${environment}`;
AWS.config.update({region: region});
const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const {
        tournamentId,
        matchType,
        tournamentType,
        duration,
        rounds,
        startWeight,
        endWeight,
        unit
    } = event.arguments.input

    let createPromises = [];

    for (let weight = startWeight; weight <= endWeight; weight += unit) {
        const currentIsoDate = (new Date()).toISOString();
        const createMatchParam = {
            TableName: matchTableName,
            Item: {
                id: uuid(),
                tournamentId: tournamentId,
                matchType: matchType,
                tournamentType: tournamentType,
                duration: duration,
                rounds: rounds,
                weight: weight,
                createdAt: currentIsoDate,
                updatedAt: currentIsoDate
            }
        }

        createPromises.push(
            await documentClient.put(createMatchParam).promise()
        )
    }

    await Promise.all(createPromises)

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Created Matches'),
    };
};
