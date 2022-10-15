/**
 * Data Model Interfaces
 */
 import { BaseUser, User } from "./user.interface";
 import { Users } from "./users.interface";
 import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; 
import { randomUUID } from "crypto";
 
 const client = new DynamoDBClient({region: 'ap-south-1', credentials: {accessKeyId: 'AKIASPPGZ4UYZU762EAD', secretAccessKey: '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'}});

/**
 * In-Memory Store
 */


/**
 * Service Methods
 */

export const getUserById = async (userId: string): Promise<User> => {
    const params = {
        TableName: "oslash", //TABLE_NAME
        Key: {
          PK: { N: `USER#${userId}`},
        },
        ProjectionExpression: "userName",
      }
    const command = new GetItemCommand(params);
    const response = await client.send(command);
    console.log(response);
    return response.Item;
}