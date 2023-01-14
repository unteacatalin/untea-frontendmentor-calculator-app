import Calculator from '../components/calculator/calculator';
import ThemeWrapper from '../components/theme/theme-wrapper';

export default function Home() {
  return (
    <ThemeWrapper>
      <div styles={{ width: '100vw', height: '100vh' }}>
        <Calculator />
      </div>
    </ThemeWrapper>
  );
}
