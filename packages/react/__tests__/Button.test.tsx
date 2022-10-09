import React from 'react';
import { Button } from '../src/Button';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('tests button render and click callback', async () => {
  const handleClick = jest.fn();
  render(
    <Button color="primary" onClick={handleClick}>
      Demo Button
    </Button>
  );

  /**
   * Prefer querying by role to improve accessibility
   * https://testing-library.com/docs/dom-testing-library/api-accessibility/
   */
  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(screen.getByRole('button')).toHaveTextContent('Demo Button');
});
