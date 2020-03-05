var tabs = document.querySelectorAll('.tabs_item');
var tabsArray = [];


for (var tab in tabs) {
	var plank = tabs[tab];

	if (typeof plank == 'object') {

		tabsArray.push(plank);

		plank.addEventListener('click', function(argument){

			for(var otherTabs in tabs) {

				tabs[otherTabs].className = 'tabs_item';	

			} 

			var index = tabsArray.indexOf(this);

			var contents = document.querySelectorAll('.tabs_content');
			var contentArray = [];

			for(var content in contents) {
				var contentTab = contents[content];

				if(typeof contentTab == 'object'){
					contentTab.className = 'tabs_content';	
					contentArray.push(contentTab);
				}
			}

			contentArray[index].className = 'tabs_content active';


			this.className = 'tabs_item active';

		})
	}

	console.log(typeof plank)
}