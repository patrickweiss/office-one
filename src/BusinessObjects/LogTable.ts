
class TableCache{
    dataArray: Object[][]
    constructor(connectedDrive:DriveConnector,tableName:Tables){
        this.dataArray = connectedDrive.getTableData(tableName)
    }
    protected getDataArray(){
        return this.dataArray;
    }
}

class LogTable extends TableCache {
    constructor(){
        super(new DriveConnector(),Tables.Log)
    }

}
