document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render( /*#__PURE__*/React.createElement(Page, { sentences: paragraph }), document.getElementById('root'));
});

////////////////////////////////////////////////////////////////////////

var sentence1 = [
{ word: '私', romaji: 'watashi', meaning: 'me', category: 'pronoun', hiragana: 'わたし' },
{ word: 'は', romaji: 'wa', meaning: '(topic)', category: 'particle', hiragana: 'わ' },
{ word: '日本語', romaji: 'nihongo', meaning: 'japanese language', category: 'noun', hiragana: 'にほんご' },
{ word: 'を', romaji: 'o', meaning: '(direct object)', category: 'particle', hiragana: 'お' },
{ word: '少し', romaji: 'sukoshi', meaning: 'a little', category: 'adverb', hiragana: 'すこし' },
{ word: '話せます', romaji: 'hanasemasu', meaning: 'can speak', category: 'verb', hiragana: 'はなせます' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


var sentence2 = [
{ word: '食べ物', romaji: 'tabemono', meaning: 'food', category: 'noun', hiragana: 'たべもの' },
{ word: 'が', romaji: 'ga', meaning: '(subject)', category: 'particle', hiragana: 'が' },
{ word: '美味しい', romaji: 'oishii', meaning: 'delicious', category: 'adjective', hiragana: 'おいしい' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


var sentence3 = [
{ word: '映画館', romaji: 'eigakan', meaning: 'movie theater', category: 'noun', hiragana: 'えいがかん' },
{ word: 'に', romaji: 'ni', meaning: '(destination)', category: 'particle', hiragana: 'に' },
{ word: '行って', romaji: 'itte', meaning: 'go', category: 'verb', hiragana: 'いって' },
{ word: '、', meaning: '(comma)', category: 'punctuation' },
{ word: '映画', romaji: 'eiga', meaning: 'movie', category: 'noun', hiragana: 'えいが' },
{ word: 'を', romaji: 'o', meaning: '(direct object)', category: 'particle', hiragana: 'お' },
{ word: '見た', romaji: 'mita', meaning: 'saw', category: 'verb', hiragana: 'みた' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


var sentence4 = [
{ word: 'ボストン', romaji: 'bosuton', meaning: 'Boston', category: 'noun', hiragana: 'ぼすとん' },
{ word: 'の', romaji: 'no', meaning: '(possession)', category: 'particle', hiragana: 'の' },
{ word: '夏', romaji: 'natsu', meaning: 'summer', category: 'noun', hiragana: 'なつ' },
{ word: 'は', romaji: 'wa', meaning: '(topic)', category: 'particle', hiragana: 'わ' },
{ word: 'とても', romaji: 'totemo', meaning: 'very', category: 'adverb', hiragana: 'とても' },
{ word: '暑い', romaji: 'atsui', meaning: 'hot', category: 'adjective', hiragana: 'あつい' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


var sentence5 = [
//日本語　や　電子音楽　や　プログラミング　に　とても　興味　を　持つ　。
{ word: '私', romaji: 'watashi', meaning: 'me', category: 'pronoun', hiragana: 'わたし' },
{ word: 'は', romaji: 'wa', meaning: '(topic)', category: 'particle', hiragana: 'わ' },
{ word: 'プログラミング', romaji: 'puroguramingu', meaning: 'programming', category: 'noun', hiragana: 'ぷろぐらみんぐ' },
{ word: 'や', romaji: 'ya', meaning: 'and', category: 'particle', hiragana: 'や' },
{ word: '電子音楽', romaji: 'denshi ongaku', meaning: 'electronic music', category: 'noun', hiragana: 'でんしおんがく' },
{ word: 'や', romaji: 'ya', meaning: 'and', category: 'particle', hiragana: 'や' },
{ word: '日本語', romaji: 'nihongo', meaning: 'japanese language', category: 'noun', hiragana: 'にほんご' },
{ word: 'が', romaji: 'ga', meaning: '(subject)', category: 'particle', hiragana: 'が' },
{ word: '好き', romaji: 'suki', meaning: 'like/desirable', category: 'adjective', hiragana: 'すき' },
{ word: 'です', romaji: 'desu', meaning: 'is', category: 'verb', hiragana: 'です' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


var sentence6 = [
{ word: '寝れない', romaji: 'nerenai', meaning: "can't sleep", category: 'verb', hiragana: 'ねれねい' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


//私の誕生日は４月にある。
var sentence7 = [
{ word: '私', romaji: 'watashi', meaning: 'me', category: 'pronoun', hiragana: 'わたし' },
{ word: 'の', romaji: 'no', meaning: '(possession)', category: 'particle', hiragana: 'の' },
{ word: '誕生日', romaji: 'tanjoubi', meaning: 'birthday', category: 'noun', hiragana: 'たんじょうび' },
{ word: 'は', romaji: 'wa', meaning: '(topic)', category: 'particle', hiragana: 'わ' },
{ word: '４月', romaji: 'shigatsu', meaning: 'April', category: 'noun', hiragana: 'しがつ' },
{ word: 'に', romaji: 'ni', meaning: '(destination)', category: 'particle', hiragana: 'に' },
{ word: 'ある', romaji: 'aru', meaning: 'exists', category: 'verb', hiragana: 'ある' },
{ word: '。', meaning: '(period)', category: 'punctuation' }];


var paragraph = [sentence1, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7];

////////////////////////////////////////////////////////////////////////

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.sentences[0][0] };

  }

  setWordDetail(word) {
    this.setState({
      word: word });

  }

  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Paragraph, { sentences: this.props.sentences, selected: this.state.word, setWord: this.setWordDetail.bind(this) }), /*#__PURE__*/
      React.createElement(WordDetail, { word: this.state.word })));


  }}


////////////////////////////////////////////////////////////////////////

const Paragraph = ({ sentences, selected, setWord }) => /*#__PURE__*/
React.createElement("div", { className: "paragraph" }, /*#__PURE__*/
React.createElement("p", null,
sentences.map((sentence) => /*#__PURE__*/
React.createElement("span", null, /*#__PURE__*/React.createElement(Sentence, { words: sentence, selected: selected, setWord: setWord }), /*#__PURE__*/React.createElement("br", null)))));





////////////////////////////////////////////////////////////////////////
const Sentence = ({ words, selected, setWord }) => /*#__PURE__*/
React.createElement("span", { className: "jp-sentence" },
words.map(word => {
  const isSelected = word === selected ? 'selected' : '';
  return /*#__PURE__*/React.createElement(Word, { word: word, isSelected: isSelected, setWord: setWord });
}));



////////////////////////////////////////////////////////////////////////

const Word = ({ word, isSelected, setWord }) => /*#__PURE__*/
React.createElement("span", { className: ['word', word.category, isSelected].join(' '), onClick: _ => setWord(word) },
word.word);



////////////////////////////////////////////////////////////////////////

const WordDetail = ({ word }) => {
  const properties = Object.keys(word).
  filter(key => key != 'word').
  map(key => /*#__PURE__*/React.createElement(WordProperty, { k: key, v: word[key] }));

  return /*#__PURE__*/(
    React.createElement("div", { className: "word-detail" }, /*#__PURE__*/
    React.createElement("div", { className: 'word-header ' + word.category }, word.word), /*#__PURE__*/
    React.createElement("table", null,
    properties)));



};

////////////////////////////////////////////////////////////////////////

const WordProperty = ({ k, v }) => /*#__PURE__*/
React.createElement("tr", { className: "word-property" }, /*#__PURE__*/
React.createElement("td", { className: "word-key" }, k), /*#__PURE__*/
React.createElement("td", { className: "word-value" }, v));



////////////////////////////////////////////////////////////////////////

// Unused
class SentenceDeconstruction extends React.Component {
  render() {
    const words = this.props.words.
    filter(word => word.category != 'punctuation').
    map((word) => /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", { className: 'word ' + word.category }, word.word), /*#__PURE__*/
    React.createElement("span", null, " - ", word.meaning), /*#__PURE__*/
    React.createElement("br", null)));



    return /*#__PURE__*/(
      React.createElement("span", { className: "jp-decomposition" },
      words));


  }}