'use client';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="nav">
      <ul>
        <li className={`${pathname === '/tictactoe' ? 'active' : ''}`}>
          <a href="/tictactoe">Tic-Tac-Toe</a>
        </li>
        <li className={`${pathname === '/madlib' ? 'active' : ''}`}>
          <a href="/madlib">Mad Lib</a>
        </li>
        <li className={`${pathname === '/magicEightBall' ? 'active' : ''}`}>
          <a href="/magicEightBall">Magic Eight Ball</a>
        </li>
        <li className={`${pathname === '/rockPaperScissors' ? 'active' : ''}`}>
          <a href="/rockPaperScissors">Rock-Paper-Scissors</a>
        </li>
      </ul>
    </nav>
  );
}
