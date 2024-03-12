import { Card, Typography } from "@material-tailwind/react";

export function DefaultTable({ data, columns }) {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const isLast = index === data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                {columns.map((column,index) => {

                return  (<td className={classes} key={index}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item[column]}
                    </Typography>
                  </td>)
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
