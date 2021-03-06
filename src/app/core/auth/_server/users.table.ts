export class UsersTable {
    public static users: any = [
        {
            id: 1,
            username: 'kemenkeu',
            password: 'demo',
            email: 'kemenkeu@demo.com',
            accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
            refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
            roles: [1], // Administrator
            pic: './assets/media/users/default.jpg',
            fullname: 'Kemenkeu',
            occupation: 'CEO',
            companyName: 'Kementrian Keuangan',
            phone: '456669067890',
            address: {
                addressLine: 'L-12-20 Vertex, Cybersquare',
                city: 'San Francisco',
                state: 'California',
                postCode: '45000'
            },
            socialNetworks: {
                linkedIn: 'https://linkedin.com/admin',
                facebook: 'https://facebook.com/admin',
                twitter: 'https://twitter.com/admin',
                instagram: 'https://instagram.com/admin'
            }
        },
        {
            id: 2,
            username: 'user1',
            password: 'demo',
            email: 'justin@demo.com',
            accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
            refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
            roles: [2], // Manager
            pic: './assets/media/users/default.jpg',
            fullname: 'Justin',
            occupation: 'Peserta',
            companyName: 'Guest',
            phone: '456669067891',
            address: {
                addressLine: '3487  Ingram Road',
                city: 'Greensboro',
                state: 'North Carolina',
                postCode: '27409'
            },
            socialNetworks: {
                linkedIn: 'https://linkedin.com/user',
                facebook: 'https://facebook.com/user',
                twitter: 'https://twitter.com/user',
                instagram: 'https://instagram.com/user'
            }
        },
        {
            id: 3,
            username: 'bptapera',
            password: 'demo',
            email: 'bptapera@demo.com',
            accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
            refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
            roles: [3], // Guest
            pic: './assets/media/users/default.jpg',
            fullname: 'BP TAPERA',
            occupation: 'CFO',
            companyName: 'BP Tapera',
            phone: '456669067892',
            address: {
                addressLine: '1467  Griffin Street',
                city: 'Phoenix',
                state: 'Arizona',
                postCode: '85012'
            },
            socialNetworks: {
                linkedIn: 'https://linkedin.com/guest',
                facebook: 'https://facebook.com/guest',
                twitter: 'https://twitter.com/guest',
                instagram: 'https://instagram.com/guest'
            }
        },
        {
            id: 4,
            username: 'user2',
            password: 'demo',
            email: 'thomas@demo.com',
            accessToken: 'access-token-6829bba69dd3421d8762-991e9e806abf',
            refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e65',
            roles: [2], // Manager
            pic: './assets/media/users/default.jpg',
            fullname: 'Thomas',
            occupation: 'Peserta',
            companyName: 'Guest',
            phone: '456669067891',
            address: {
                addressLine: '3487  Ingram Road',
                city: 'Greensboro',
                state: 'North Carolina',
                postCode: '27409'
            },
            socialNetworks: {
                linkedIn: 'https://linkedin.com/user',
                facebook: 'https://facebook.com/user',
                twitter: 'https://twitter.com/user',
                instagram: 'https://instagram.com/user'
            }
        },
        {
            id: 5,
            username: 'pesertamandiri',
            password: 'demo',
            email: 'peserta@demo.com',
            accessToken: 'access-token-6829bba69dd3421d8762-991e9e806mdr',
            refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9mdr',
            roles: [4], // Peserta Mandiri
            pic: './assets/media/users/default.jpg',
            fullname: 'Peserta Mandiri',
            occupation: 'Peserta Mandiri',
            companyName: 'Mandiri',
            phone: '456669067000',
            address: {
                addressLine: '3487  Ingram Road',
                city: 'Greensboro',
                state: 'North Carolina',
                postCode: '27409'
            },
            socialNetworks: {
                linkedIn: 'https://linkedin.com/pesertamandiri',
                facebook: 'https://facebook.com/pesertamandiri',
                twitter: 'https://twitter.com/pesertamandiri',
                instagram: 'https://instagram.com/pesertamandiri'
            }
        }
    ];


    // public static users: any = [
    // 	{
    // 		id: 1,
    // 		username: 'admin',
    // 		password: 'demo',
    // 		email: 'demo@kemenkeu.go.id',
    // 		accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
    // 		refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
    // 		roles: [1], // Administrator
    // 		pic: './assets/media/users/default.jpg',
    // 		fullname: 'Kementerian Keuangan',
    // 		occupation: 'CEO',
    // 		companyName: 'Mandiri',
    // 		phone: '456669067890',
    // 		address: {
    // 			addressLine: 'L-12-20 Vertex, Cybersquare',
    // 			city: 'San Francisco',
    // 			state: 'California',
    // 			postCode: '45000'
    // 		},
    // 		socialNetworks: {
    // 			linkedIn: 'https://linkedin.com/admin',
    // 			facebook: 'https://facebook.com/admin',
    // 			twitter: 'https://twitter.com/admin',
    // 			instagram: 'https://instagram.com/admin'
    // 		}
    // 	},
    // 	{
    // 		id: 2,
    // 		username: 'user',
    // 		password: 'demo',
    // 		email: 'demo@mandiri.com',
    // 		accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
    // 		refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
    // 		roles: [2], // Manager
    // 		pic: './assets/media/users/default.jpg',
    // 		fullname: 'Admin',
    // 		occupation: 'Deputy Head of Roy in New York office',
    // 		companyName: 'Mandiri',
    // 		phone: '456669067891',
    // 		address: {
    // 			addressLine: '3487  Ingram Road',
    // 			city: 'Greensboro',
    // 			state: 'North Carolina',
    // 			postCode: '27409'
    // 		},
    // 		socialNetworks: {
    // 			linkedIn: 'https://linkedin.com/user',
    // 			facebook: 'https://facebook.com/user',
    // 			twitter: 'https://twitter.com/user',
    // 			instagram: 'https://instagram.com/user'
    // 		}
    //     },
    //     {
    // 		id: 3,
    // 		username: 'justin',
    // 		password: 'demo',
    // 		email: 'demo@bptappera.com',
    // 		accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
    // 		refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
    // 		roles: [3], // Guest
    // 		pic: './assets/media/users/default.jpg',
    // 		fullname: 'Ginobili Maccari',
    // 		occupation: 'CFO',
    // 		companyName: 'Mandiri',
    // 		phone: '456669067892',
    // 		address: {
    // 			addressLine: '1467  Griffin Street',
    // 			city: 'Phoenix',
    // 			state: 'Arizona',
    // 			postCode: '85012'
    // 		},
    // 		socialNetworks: {
    // 			linkedIn: 'https://linkedin.com/guest',
    // 			facebook: 'https://facebook.com/guest',
    // 			twitter: 'https://twitter.com/guest',
    // 			instagram: 'https://instagram.com/guest'
    // 		}
    // 	}
    // ];

    public static tokens: any = [
        {
            id: 1,
            accessToken: 'access-token-' + Math.random(),
            refreshToken: 'access-token-' + Math.random()
        }
    ];
}
