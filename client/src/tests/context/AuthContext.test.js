import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../context/AuthContext';

test('login function updates the user state and localStorage', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;

  const { result } = renderHook(() => useAuth(), { wrapper });

  act(() => {
    result.current.login({ token: '12345', name: 'Test User' });
  });

  expect(result.current.user).toEqual({ token: '12345', name: 'Test User' });
  expect(localStorage.getItem('user')).toEqual(JSON.stringify({ token: '12345', name: 'Test User' }));
});

test('logout function clears the user state and localStorage', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;

  const { result } = renderHook(() => useAuth(), { wrapper });

  act(() => {
    result.current.login({ token: '12345', name: 'Test User' });
    result.current.logout();
  });

  expect(result.current.user).toBeNull();
  expect(localStorage.getItem('user')).toBeNull();
});
