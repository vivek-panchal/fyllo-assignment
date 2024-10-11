import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const DataGrid = ({ data }) => {
  const [pageSize, setPageSize] = useState(10); 

  const columns = [
    { headerName: 'Fertilizer', field: 'name', sortable: true, filter: true },
    { headerName: 'State', field: 'state', sortable: true, filter: true },
    { headerName: 'Requirement', field: 'requirement', sortable: true, filter: true },
    { headerName: 'Availability', field: 'availability', sortable: true, filter: true },
    { headerName: 'Month', field: 'month', sortable: true, filter: true },
  ];


  return (
    <div>
      <div className="ag-theme-alpine-dark" style={{ width: '100%', height: '100%' }}>
        <AgGridReact
          columnDefs={columns}
          rowData={data}
          pagination={true}
          paginationPageSize={pageSize} 
          domLayout='autoHeight'
          onGridReady={params => {
            params.api.sizeColumnsToFit();
            window.addEventListener('resize', () => {
              setTimeout(() => {
                params.api.sizeColumnsToFit();
              });
            });
          }}
        />
      </div>
    </div>
  );
};

export default DataGrid;
