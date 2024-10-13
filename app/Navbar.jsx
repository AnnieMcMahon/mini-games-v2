export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Mini-Games
      </a>
      <ul>
        <li>
          <a href="/tictactoe">Tic-Tac-Toe</a>
        </li>
        <li>
          <a href="/madlib">Mad-Lib</a>
        </li>
        <li>
          <a href="/magicEightBall">Magic Eight Ball</a>
        </li>
        <li>
          <a href="/rockPaperScissors">Rock-Paper-Scissors</a>
        </li>
      </ul>
    </nav>
  );
}
