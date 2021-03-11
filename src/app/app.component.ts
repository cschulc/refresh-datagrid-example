import { Component } from "@angular/core";
import { ClrDatagridStateInterface } from "@clr/angular";
import { User } from "./User";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  users: User[];
  total: number;
  loading: boolean = true;
  inventory = [
    new User("1", "Peter", "foobar", "green"),
    new User("2", "Michael", "bla", "red")
  ];

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    let filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let { property, value } = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }
    this.users = this.inventory;
  }
}
