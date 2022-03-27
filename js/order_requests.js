(async function()
{
  const response = await get('/api/order_requests', {});

  const table = document.getElementsByClassName('table__body')[0];

  columns = ['customer_name', 'customer_phone', 'customer_info', 'datetimes', 'status'];

  insertDataIntoTable(table, columns, response);  
}())