(async function()
{
  const response = await get('/api/orders', {});

  const table = document.getElementsByClassName('table__body')[0];

  columns = ['customer_name', 'customer_phone', 'customer_address', 'delivery_type', 'datetimes', 'status'];

  insertDataIntoTable(table, columns, response);  
}())