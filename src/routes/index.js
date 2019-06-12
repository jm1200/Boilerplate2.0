const routes = {
  manageData: {
    menuName: "Manage Data",
    subMenus: [
      {
        path: "/importExpenses",
        subMenuName: "Import Expenses",
        type: "private"
      },
      { path: "/expensesList", subMenuName: "Expenses List", type: "private" },
      {
        path: "/categoriesManager",
        subMenuName: "Categories Manager",
        ptype: "private"
      }
    ]
  },
  expenses: {
    menuName: "Expenses",
    subMenus: [
      { path: "/expenses", subMenuName: "Expenses Summary", type: "private" }
    ]
  },
  income: {
    menuName: "Income",
    subMenus: [
      { path: "/income", subMenuName: "Income Summary", type: "private" }
    ]
  },
  assets: {
    menuName: "Assets",
    subMenus: [
      { path: "/assets", subMenuName: "Assets Summary", type: "private" }
    ]
  },
  liabilities: {
    menuName: "Liabilities",
    subMenus: [
      {
        path: "/liabilities",
        subMenuName: "Liabilites Summary",
        type: "private"
      }
    ]
  }
};
export default routes;
