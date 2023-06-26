import React from 'react'


const kitchen = () => {
	const OrderItems = [{table_number: 1, dish: 'Tomato Soup',modifications:'None',quantity:'2' },
	{table_number: 14, dish: 'Tomato Soup',modifications:'yes',quantity:'2' },

];

  return (
    <table class="min-w-full border-collapse block md:table">
	<thead class="block md:table-header-group">
		<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
			<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Table_Number</th>
			<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Dish</th>
			<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Modifications</th>
			<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Quantity</th>
			<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
		</tr>
		</thead>
		<tbody className="block md:table-row-group">
        {OrderItems.map(item => (
          <tr key={item.id} className="bg-white shadow rounded-lg p-4">
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.table_number}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.dish}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.modifications}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.quantity}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
	
	

	</table>
  )
}

export default kitchen