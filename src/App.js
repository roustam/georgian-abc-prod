import './App.css';
import Header from "./components/Header";
import Letter from "./components/Letter";

function App() {
  const theAbc = [
    {'letter':'ა' , 'letterName': 'ан', 'letterDesc':' anegdot’i ანეგდოტი'},
    {'letter':'ბ' , 'letterName': 'бан', 'letterDesc':'бежать : rbena : რბენა'},
    {'letter':'გ' , 'letterName': 'ган', 'letterDesc':'вагон :: vagoni :: ვაგონი'},
    {'letter':'დ' , 'letterName': 'дон', 'letterDesc':'день :: dghe :: დღე'},
    {'letter':'ე' , 'letterName': 'эн', 'letterDesc':'врач :: ekimi :: ექიმი'},
    {'letter':'ვ' , 'letterName': 'вин', 'letterDesc':'кто :: vis :: ვის'},
    {'letter':'ზ' , 'letterName': 'зен', 'letterDesc':'зима :: zamtari :: ზამთარი'},
    {'letter':'თ' , 'letterName': 'т’ан', 'letterDesc':'голова :: tavi :: თავი'},
    {'letter':'ი' , 'letterName': 'ин', 'letterDesc':'idea იდეა'},
    {'letter':'კ' , 'letterName': 'кан', 'letterDesc':'класс :: k’lasi :: კლასი'},
    {'letter':'ლ' , 'letterName': 'лас', 'letterDesc':'лимон :: limoni :: ლიმონი'},
    {'letter':'მ' , 'letterName': 'ман', 'letterDesc':'много :: mravali :: მრავალი'},
    {'letter':'ნ' , 'letterName': 'нар', 'letterDesc':'нежный :: nazi :: ნაზი'},
    {'letter':'ო' , 'letterName': 'он', 'letterDesc':'однажды :: odesghats :: ოდესღაც'},
    {'letter':'პ' , 'letterName': 'пар', 'letterDesc':'проблема :: p’roblema :: პრობლემა'},
    {'letter':'ჟ' , 'letterName': 'жан', 'letterDesc':'журнал :: zhurnali :: ჟურნალი'},
    {'letter':'რ' , 'letterName': 'раэ', 'letterDesc':'ряд :: rigi :: რიგი'},
    {'letter':'ს' , 'letterName': 'сан', 'letterDesc':'свет :: sinatle :: სინათლე'},
    {'letter':'ტ' , 'letterName': 'тар', 'letterDesc':'тело :: t’ani :: ტანი'},
    {'letter':'უ' , 'letterName': 'ун', 'letterDesc':'холостяк :: utsolo :: უცოლო'},
    {'letter':'ფ' , 'letterName': 'п’ар', 'letterDesc':'яростный :: pitsch’i :: ფიცხი'},
    {'letter':'ქ' , 'letterName': 'к’ан', 'letterDesc':'бумага :: kaghaldi :: ქაღალდი'},
    {'letter':'ღ' , 'letterName': 'ған', 'letterDesc':'ночь :: ghame :: ღამე'},
    {'letter':'ყ' , 'letterName': 'қар', 'letterDesc':'ребенок :: q’mats’vili :: ყმაწვილი'},
    {'letter':'შ' , 'letterName': 'шин', 'letterDesc':'эффект :: shedegi :: შედეგი'},
    {'letter':'ჩ' , 'letterName': 'чин', 'letterDesc':'чай :: chai :: ჩაი'},
    {'letter':'ც' , 'letterName': 'цан', 'letterDesc':'цифра :: tsipri :: ციფრი'},
    {'letter':'ძ' , 'letterName': 'дзил', 'letterDesc':'довольно :: dzalian :: ძალიან'},
    {'letter':'წ' , 'letterName': 'ц’ил', 'letterDesc':'уходить :: ts’asvla :: წასვლა'},
    {'letter':'ჭ' , 'letterName': 'ч’ар', 'letterDesc':'сомнение :: ekhvi :: ეჭვი'},
    {'letter':'ხ' , 'letterName': 'хан', 'letterDesc':'шутка :: ch’umroba :: ხუმრობა'},
    {'letter':'ჯ' , 'letterName': 'джан', 'letterDesc':'еще :: jer :: ჯერ'},
    {'letter':'ჰ' , 'letterName': 'х’аэ', 'letterDesc':'воздух haeri ჰაერი'},
  ]
  return (
    <div className="App">
      <Header headerTitle = {'Алфавит 🇬🇪 '}/>
      <div className="georgian-abc-box">
        {theAbc.map((letter) => {
          return (
          <Letter letter={letter.letter}
                  letterName={letter.letterName}
                  letterDesc={letter.letterDesc}
          />)
        })
        }
        {/*<Letter letter={'ა'} letterName={'Ан'} letterDesc={'анекдот :: anegdot’i :: ანეგდოტი'}/>*/}

      </div>
    </div>
  );
}

export default App;
