import { Component ,OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public items = [];
	constructor(public dialog: MatDialog) { }

	ngOnInit() {
		this.items = [
		              {
		            	  "lid": 0,
		            	  "Title": "List 1",
		            	  "Content": [
		            	              {
		            	            	  "cardTitle": "Card 1",
		            	            	  "cardDesc": "Description",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              },
		            	              {
		            	            	  "cardTitle": "Card 2",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              },
		            	              {
		            	            	  "cardTitle": "Card 3",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              }
		            	              ]
		              },
		              {
		            	  "lid": 1,
		            	  "Title": "List 2",
		            	  "Content": [
		            	              {
		            	            	  "cardTitle": "Card 1",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              },
		            	              {
		            	            	  "cardTitle": "Card 2",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              },
		            	              {
		            	            	  "cardTitle": "Card 3",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              }
		            	              ]
		              },
		              {
		            	  "lid": 2,
		            	  "Title": "List 3",
		            	  "Content": [
		            	              {
		            	            	  "cardTitle": "Card 1",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              },
		            	              {
		            	            	  "cardTitle": "Card 2",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              },
		            	              {
		            	            	  "cardTitle": "Card 3",
		            	            	  "cardDesc": "Desc",
		            	            	  "cardComments": [
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   },
		            	            	                   {
		            	            	                	   "comment": "abc",
		            	            	                	   "date": "2 aug 2018"
		            	            	                   }
		            	            	                   ]
		            	              }
		            	              ]
		              }
		              ];
	}

	onSelect(card,item){
		const dialogRef = this.dialog.open(DialogForCardDetails, {
			width: '1300px',
			data: card
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result.destroy != undefined && result.destroy ){
				var index = this.items.indexOf(item);
				var data = this.items[index];
				data = data.Content;
				var i = data.indexOf(card);
				data.splice(i,1);
			}
		}); 

	}
	addCard(item){
		const dialogRef = this.dialog.open(DialogForAddCard, {
			width: '350px',
			data: item
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result.cName != undefined && result.cDes != undefined){
				var data = {
						"cardTitle": result.cName,
						"cardDesc" : result.cDes,
						"cardComments":[]
				};
				var tempContent = item.Content;
				tempContent.push(data);
				item.Content = tempContent;
			}
		}); 

	}
	addList(){
		const dialogRef = this.dialog.open(DialogForNewList, {
			width: '350px',
			data: ""
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result.title != undefined){
				var id = Number(this.items[this.items.length-1].lid)+1;
				var data = {
						"lid":id,
						"Title":result.title,
						"Content": []
				};
				this.items.push(data);
			}

		}); 
	}
	deleteList(item){
		var index = this.items.indexOf(item);
		this.items.splice(index,1);
	}
	allowDrop(ev) {
		ev.preventDefault();
		ev.dataTransfer.dropEffect="move";
	}
	drag(ev,card,item) {
		var index = this.items.indexOf(item);
		var data = this.items[index];
		data = data.Content;
		var i = data.indexOf(card);
		var toData = {
				"item": item,
				"append": card,
				"index":i,
				"remove":data
		}
		ev.dataTransfer.setData("text/plain",JSON.stringify(toData));
		ev.dataTransfer.effectAllowed = "move";
	}
	drop(ev,item) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text/plain");
		data = JSON.parse(data);
		var remInd = this.items.findIndex(function(item, i){
			return item.lid === data.item.lid;
		});
		data.remove.splice(data.index,1);
		this.items[remInd].Content = data.remove;
		var index = this.items.indexOf(item)
		this.items[index].Content.push(data.append); 
	}	

}

//dialog box for add card
@Component({
	selector: 'dialog-for-add-card',
	templateUrl: 'dialog-for-add-card.html',
})
export class DialogForAddCard {
	public cardName : any;
	public cardDescription: any;
	constructor(
		public dialogRef: MatDialogRef<DialogForAddCard>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	onClickOk(): void {
		let data = {
			"cName": this.cardName,
			"cDes": this.cardDescription
		}
		this.dialogRef.close(data);
	}
} 


//dialog box for add list
@Component({
	selector: 'dialog-for-new-list',
	templateUrl: 'dialog-for-new-list.html',
})
export class DialogForNewList {
	public Title : any;
	constructor(
		public dialogRef: MatDialogRef<DialogForNewList>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
		onClickOk(): void {
			let data = {
			"title": this.Title

			}
			this.dialogRef.close(data);
		}
} 

//dialog box for card details
@Component({
	selector: 'dialog-for-card-details',
	templateUrl: 'dialog-for-card-details.html',
	styleUrls: ['./app.component.css']
})
export class DialogForCardDetails {
	public Comment : any;
	public finalResult : [];
	constructor(
		public dialogRef: MatDialogRef<DialogForCardDetails>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
	delete(){
		var data = {
			"destroy" : true
		};
		this.dialogRef.close(data);
	}
	addComment(){
		var objDate = new Date(),
		locale = "en-us",
		var month = (objDate.toLocaleString(locale, { month: "short" }));
		var day = objDate.getUTCDate();
		var year = objDate.getUTCFullYear();
		var date = day + " " + month +  " " + year;
		if(this.Comment != undefined && this.Comment != "" && this.comment != " "){
			var tempVal = {
				"comment": this.Comment,
				"date":  date
			};
			this.data.cardComments.push(tempVal);
			this.finalResult = this.data;
		}
	}
	onClickOk(): void {
		this.diazlogRef.close(this.finalResult);
	}
}  
