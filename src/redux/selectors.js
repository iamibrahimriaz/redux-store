const selectors = {
	getFamilyData( state ) {
		const { familyData } = state;

		return familyData;
	},

	getFriendsData( state ) {
		const { friendsData } = state;

		return friendsData;
	},

	getRelativesData( state ) {
		const { relativesData } = state;

		return relativesData;
	},
};

export default selectors;
