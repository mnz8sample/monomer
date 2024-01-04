import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import scss from './index.module.scss';

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={scss['home-bg']}>
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/webp"
            srcSet="https://github.githubassets.com/assets/hero-bg-md-8b05fcf46a30.webp 1x, https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 2x"
          />
          <source
            media="(min-width: 1280px)"
            type="image/webp"
            srcSet="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 1x, https://github.githubassets.com/assets/hero-bg-2x-a94895520866.webp 2x"
          />
          <img alt="hero-bg" aria-hidden="true" src="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp" />
        </picture>
      </div>
      <div className={scss['home-content']}>
        <div className={scss['home-header']}>
          <Space>
            <Button
              ghost
              style={{ border: 'none' }}
              onClick={() => {
                navigate('/sign-in');
              }}
            >
              Sign in
            </Button>
            <Button ghost>Sign up</Button>
          </Space>
        </div>
      </div>
    </>
  );
};
