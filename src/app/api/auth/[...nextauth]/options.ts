import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),

		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credential',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'kiminonawa',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'your-password',
				},
			},
			async authorize(credentials) {
				const user = {
					id: '1',
					name: 'kst',
					password: 'techlead',
				};
				if (
					credentials?.username === user.name &&
					credentials?.password === user.password
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};
