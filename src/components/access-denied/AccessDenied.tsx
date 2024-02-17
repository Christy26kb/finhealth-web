import AccessDeniedImage from '@assets/images/403_error.svg';

const AccessDenied = () => (
  <div className="flex size-full items-center justify-center align-middle">
    <img
      src={AccessDeniedImage}
      alt="forbidden-resource"
      className="w-[450px]"
    />
  </div>
);

export default AccessDenied;
