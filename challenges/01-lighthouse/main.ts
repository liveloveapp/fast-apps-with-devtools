import {
  ColDef,
  Grid,
  GridOptions,
  ModuleRegistry,
} from '@ag-grid-community/all-modules';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { resorts } from './resorts';

import './main.css';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

ModuleRegistry.register(ClientSideRowModelModule);

class ResortGrid {
  private gridOptions: GridOptions = {
    columnDefs: this.getColumnDefs(),
    defaultColDef: {
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    rowData: this.getRowData(),
  };

  constructor() {
    const grid = document.querySelector('#data') as HTMLDivElement;
    new Grid(grid, this.gridOptions);
  }

  private getColumnDefs(): ColDef[] {
    return [
      {
        field: 'resort_name',
        headerName: 'Resort Name',
        pinned: 'left',
      },
      {
        field: 'state',
      },
      {
        field: 'summit',
      },
      {
        field: 'base',
      },
      {
        field: 'vertical',
      },
      {
        field: 'lifts',
      },
      {
        field: 'runs',
      },
      {
        field: 'green_percent',
        headerName: 'Green Percent',
      },
      {
        field: 'green_acres',
        headerName: 'Green Acres',
      },
      {
        field: 'blue_percent',
        headerName: 'Blue Percent',
      },
      {
        field: 'blue_acres',
        headerName: 'Blue Acres',
      },
      {
        field: 'black_percent',
        headerName: 'Black Percent',
      },
      {
        field: 'black_acres',
        headerName: 'Black Acres',
      },
    ];
  }

  private getRowData(): { [key: string]: string | number }[] {
    return resorts;
  }
}

new ResortGrid();
