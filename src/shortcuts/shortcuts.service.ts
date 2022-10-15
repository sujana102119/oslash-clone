/**
 * Data Model Interfaces
 */
 import {  Shortcut } from "./shortcut.interface";
 import { Shortcuts } from "./shortcuts.interface";
 import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"; 
 
 const client = new DynamoDBClient({region: 'ap-south-1', credentials: {accessKeyId: 'AKIASPPGZ4UYZU762EAD', secretAccessKey: '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'}});

/**
 * In-Memory Store
 */


/**
 * Service Methods
 */

export const getShortcutsByUserId = async (userId: string): Promise<Shortcuts> => {
  const userId = `USER#${userId}`;
    const params = {
      KeyConditionExpression: "PK = :s",
      ExpressionAttributeValues: {
        ":s": { S: userId },
      },
      ProjectionExpression: "shortlink, url, description",
      TableName: "oslash",
      }
    const command = new ScanCommand(params);
    const response = await client.send(command);
    console.log(response);
    return response.Items;
}