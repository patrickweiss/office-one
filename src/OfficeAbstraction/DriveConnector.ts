class DriveConnector{
    public getTableData(tableName:Tables){
        return SpreadsheetApp.openById(this.getSpreadsheetIdForTable(tableName)).getRangeByName(tableName+"D").getValues();
        return 
    }
    private getSpreadsheetIdForTable(tableName:Tables){
        const mapping = {};
        mapping[Tables.Log]="16lJuW0IYdgYbkKFMqRuOa7Jn5pWh3RKlJuWBZAKkmH0";
        return mapping[tableName]
    }
}