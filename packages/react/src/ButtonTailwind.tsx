import { createContext, useContext, useState } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  color?: 'asda' | 'asdasd';
}

const TableContext = createContext(null) as any;

function useTableContext() {
  const context = useContext(TableContext) as any;
  if (!context) {
    throw new Error('useTableContext be used under Table component provider');
  }
  return context;
}

const Test = () => {
  const { value } = useTableContext();
  return <div>{value}</div>;
};

const ProxyTest = () => {
  const { components } = useTableContext();

  return <>{components.Header && components.Header()}</>;
};

export const Button = ({ disabled, loading, ...rest }: any) => {
  const [state, setState] = useState({
    value: 'Accessible variable',
    components: {
      Header: Test,
    },
  });

  return (
    <div>
      <TableContext.Provider value={state}>
        {/* {state.components && state.components.Header()} */}
        <ProxyTest />
      </TableContext.Provider>
    </div>
  );
};

Button.displayName = 'ButtonTailwind';

export default Button;
