var expect = require("expect");
var df=require("deep-freeze-strict");

var reducers = require("reducers");


describe("Reducers", () => {
    describe("Set text reducer", () => {
        it("should set searchText", () => {
            var action = {
                type: "SET_SEARCH_TEXT",
                searchText: "Dog"
            }
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        })
    })

    describe("toggleShowCompleted reducer",()=>
  {
    it("should toggle showcomplted",()=>
  {
    var action={
      type:"TOGGLE_SHOW_COMPLETED"
    }

    var res=reducers.showCompltedReducer(df(false),df(action))

    expect(res).toEqual(true);
  })
  })
})
