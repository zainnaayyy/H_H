import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
      const body = await req.json();
      
      // Authorize the client
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
          private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),  // Ensure the key is correctly formatted
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Append the form data to Google Sheets
      const spreadsheetId = '1hCCNo_o8bk7IXva1KZt16FfTQX8m54FbQCxevjjNSt0';
      const range = 'Sheet1!A:H'; // Adjust based on your sheet structure
      const values = [[body?.insuranceType, body?.firstName, body?.lastName, body?.dob, body?.zipCode, body?.email, body?.phoneNumber, body?.consent]];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        resource: {
          values,
        },
      });

      return NextResponse.json({ message: 'Data saved to Google Sheets successfully', status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error, status: 500 }, { status: 500 });
    }
}
