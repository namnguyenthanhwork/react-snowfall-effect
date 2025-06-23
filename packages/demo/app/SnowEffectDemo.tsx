'use client';

/**
 * Copyright (c) Thành Nam Nguyễn (https://www.thanhnamnguyen.dev/)
 * Email: namnguyenthanh.work@gmail.com
 *
 * Xem thông tin chi tiết bản quyền ở file LICENSE trong thư mục gốc.
 */
import { useState } from 'react';
import { Snowfall } from '@namnguyenthanhwork/react-snowfall-effect';

const SnowfallDemo = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [config, setConfig] = useState({
    snowflakeCount: 100,
    useCustomImages: false,
    selectedImageSet: 'snowflakes' as keyof typeof imageSets,
    speed: { min: 1, max: 3 },
    wind: { min: -1, max: 1 },
    size: { min: 15, max: 25 },
    opacity: { min: 0.3, max: 0.8 },
    rotation: { enabled: true, speed: { min: -2, max: 2 } },
    colors: ['#ffffff', '#e6f3ff', '#cce7ff'],
    fps: 60,
    snowflakeShape: 'dot' as 'circle' | 'star' | 'dot',
    fadeEdges: true,
    followMouse: false,
    gravity: 1,
    bounce: false,
    melt: false,
    accumulate: false,
    zIndex: 1000,
  });

  // Traditional snowflake images
  const snowImages = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTIgMjJNMiAxMkwyMiAxMk03IDE3TDE3IDdNNyA3TDE3IDE3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDFMMTIgNE0xMiAyMEwxMiAyM00yMyAxMkwyMCAxMk00IDEyTDEgMTJNMTkuMDcgNC45M0wxNy42NiA2LjM0TTYuMzQgMTcuNjZMNC45MyAxOS4wN000LjkzIDQuOTNMNi4zNCA2LjM0TTE3LjY2IDE3LjY2TDE5LjA3IDE5LjA3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K',
  ];

  // Heart images
  const heartImages = [
    'data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjAiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjMDAwMDAwIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGc+IDxwYXRoIGZpbGw9IiNmZjU3M2QiIGQ9Ik01OC43MTQsMjkuOTc3YzAsMC0wLjYxMiwwLjc1LTEuODIzLDEuOTYxUzMzLjQxNCw1NS40MTQsMzMuNDE0LDU1LjQxNEMzMy4wMjMsNTUuODA1LDMyLjUxMiw1NiwzMiw1NiBzLTEuMDIzLTAuMTk1LTEuNDE0LTAuNTg2YzAsMC0yMi4yNjYtMjIuMjY2LTIzLjQ3Ny0yMy40NzdzLTEuODIzLTEuOTYxLTEuODIzLTEuOTYxQzMuMjQ1LDI3LjU0NSwyLDI0LjQyNCwyLDIxIEMyLDEzLjI2OCw4LjI2OCw3LDE2LDdjMy44NjYsMCw3LjM2NiwxLjU2Niw5Ljg5OSw0LjEwMWwwLjAwOS0wLjAwOWw0LjY3OCw0LjY3N2MwLjc4MSwwLjc4MSwyLjA0NywwLjc4MSwyLjgyOCwwbDQuNjc4LTQuNjc3IGwwLjAwOSwwLjAwOUM0MC42MzQsOC41NjYsNDQuMTM0LDcsNDgsN2M3LjczMiwwLDE0LDYuMjY4LDE0LDE0QzYyLDI0LjQyNCw2MC43NTUsMjcuNTQ1LDU4LjcxNCwyOS45Nzd6Ii8+IDxwYXRoIGZpbGw9IiNmZjU3M2QiIGQ9Ik01OC43MTQsMjkuOTc3YzAsMC0wLjYxMiwwLjc1LTEuODIzLDEuOTYxUzMzLjQxNCw1NS40MTQsMzMuNDE0LDU1LjQxNEMzMy4wMjMsNTUuODA1LDMyLjUxMiw1NiwzMiw1NiBzLTEuMDIzLTAuMTk1LTEuNDE0LTAuNTg2YzAsMC0yMi4yNjYtMjIuMjY2LTIzLjQ3Ny0yMy40NzdzLTEuODIzLTEuOTYxLTEuODIzLTEuOTYxQzMuMjQ1LDI3LjU0NSwyLDI0LjQyNCwyLDIxIEMyLDEzLjI2OCw4LjI2OCw3LDE2LDdjMy44NjYsMCw3LjM2NiwxLjU2Niw5Ljg5OSw0LjEwMWwwLjAwOS0wLjAwOWw0LjY3OCw0LjY3N2MwLjc4MSwwLjc4MSwyLjA0NywwLjc4MSwyLjgyOCwwbDQuNjc4LTQuNjc3IGwwLjAwOSwwLjAwOUM0MC42MzQsOC41NjYsNDQuMTM0LDcsNDgsN2M3LjczMiwwLDE0LDYuMjY4LDE0LDE0QzYyLDI0LjQyNCw2MC43NTUsMjcuNTQ1LDU4LjcxNCwyOS45Nzd6Ii8+IDxnPiA8cGF0aCBmaWxsPSIjNTY0ZTRlIiBkPSJNNDgsNWMtNC40MTgsMC04LjQxOCwxLjc5MS0xMS4zMTMsNC42ODdsLTMuOTc5LDMuOTYxYy0wLjM5MSwwLjM5MS0xLjAyMywwLjM5MS0xLjQxNCwwIGMwLDAtMy45NzEtMy45Ny0zLjk3OS0zLjk2MUMyNC40MTgsNi43OTEsMjAuNDE4LDUsMTYsNUM3LjE2Myw1LDAsMTIuMTYzLDAsMjFjMCwzLjMzOCwxLjAyNCw2LjQzNiwyLjc3Myw5IGMwLDAsMC43MzQsMS4xNjQsMS42MDIsMi4wMzFzMjQuNzk3LDI0Ljc5NywyNC43OTcsMjQuNzk3QzI5Ljk1Myw1Ny42MDksMzAuOTc3LDU4LDMyLDU4czIuMDQ3LTAuMzkxLDIuODI4LTEuMTcyIGMwLDAsMjMuOTMtMjMuOTMsMjQuNzk3LTI0Ljc5N1M2MS4yMjcsMzAsNjEuMjI3LDMwQzYyLjk3NiwyNy40MzYsNjQsMjQuMzM4LDY0LDIxQzY0LDEyLjE2Myw1Ni44MzcsNSw0OCw1eiBNNTguNzE0LDI5Ljk3NyBjMCwwLTAuNjEyLDAuNzUtMS44MjMsMS45NjFTMzMuNDE0LDU1LjQxNCwzMy40MTQsNTUuNDE0QzMzLjAyMyw1NS44MDUsMzIuNTEyLDU2LDMyLDU2cy0xLjAyMy0wLjE5NS0xLjQxNC0wLjU4NiBjMCwwLTIyLjI2Ni0yMi4yNjYtMjMuNDc3LTIzLjQ3N3MtMS44MjMtMS45NjEtMS44MjMtMS45NjFDMy4yNDUsMjcuNTQ1LDIsMjQuNDI0LDIsMjFDMiwxMy4yNjgsOC4yNjgsNywxNiw3IGMzLjg2NiwwLDcuMzY2LDEuNTY2LDkuODk5LDQuMTAxbDAuMDA5LTAuMDA5bDQuNjc4LDQuNjc3YzAuNzgxLDAuNzgxLDIuMDQ3LDAuNzgxLDIuODI4LDBsNC42NzgtNC42NzdsMC4wMDksMC4wMDkgQzQwLjYzNCw4LjU2Niw0NC4xMzQsNyw0OCw3YzcuNzMyLDAsMTQsNi4yNjgsMTQsMTRDNjIsMjQuNDI0LDYwLjc1NSwyNy41NDUsNTguNzE0LDI5Ljk3N3oiLz4gPHBhdGggZmlsbD0iIzU2NGU0ZSIgZD0iTTQ4LDExYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxYzQuNDE4LDAsOCwzLjU4Miw4LDhjMCwwLjU1MywwLjQ0NywxLDEsMXMxLTAuNDQ3LDEtMSBDNTgsMTUuNDc4LDUzLjUyMiwxMSw0OCwxMXoiLz4gPC9nPiA8L2c+IDwvZz4KDTwvc3ZnPg==',
    'data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxnIGlkPSJzdHlsZT1idWxrIj4gPGcgaWQ9ImhlYXJ0Ij4gPHBhdGggaWQ9InZlY3RvciAoU3Ryb2tlKSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjI1IDguNjkwMUMxLjI1IDUuMTg5MzkgNC4wNzIyOSAyLjM1MDEgNy41NiAyLjM1MDFDOS4yOTY3NCAyLjM1MDEgMTAuODY0NiAzLjA1NjA4IDEyLjAwMDMgNC4xOTQ4MUMxMy4xMzg1IDMuMDU1NzQgMTQuNzEyMiAyLjM1MDEgMTYuNDQgMi4zNTAxQzE5LjkyNzcgMi4zNTAxIDIyLjc1IDUuMTg5MzkgMjIuNzUgOC42OTAxQzIyLjc1IDEyLjQzOTYgMjEuMDEwNyAxNS40MDAyIDE4LjkzNDIgMTcuNTI3N0MxNi44NjgzIDE5LjY0NDQgMTQuNDIzNSAyMC45ODYyIDEyLjg2NTcgMjEuNTE4N0MxMi41OTE0IDIxLjYxNDggMTIuMjc3MyAyMS42NTAxIDEyIDIxLjY1MDFDMTEuNzIyNyAyMS42NTAxIDExLjQwODYgMjEuNjE0OCAxMS4xMzQzIDIxLjUxODdDOS41NzY1NSAyMC45ODYyIDcuMTMxNjkgMTkuNjQ0NCA1LjA2NTc3IDE3LjUyNzdDMi45ODkzMiAxNS40MDAyIDEuMjUgMTIuNDM5NiAxLjI1IDguNjkwMVoiIGZpbGw9IiNmZjcwNzAiLz4gPHBhdGggaWQ9InZlY3RvciAoU3Ryb2tlKV8yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjcyNDUgMTAuMjU1M0MyMC4xMTk3IDEwLjM3OTMgMjAuMzM5NiAxMC44MDAyIDIwLjIxNTYgMTEuMTk1NEMxOS4zNjc4IDEzLjg5NzQgMTcuNjI4NCAxNi4wMjU2IDE1LjgxODEgMTcuNTcwOEMxNS41MDMxIDE3LjgzOTcgMTUuMDI5NyAxNy44MDIzIDE0Ljc2MDcgMTcuNDg3MkMxNC40OTE4IDE3LjE3MjIgMTQuNTI5MiAxNi42OTg4IDE0Ljg0NDMgMTYuNDI5OUMxNi41MDk1IDE1LjAwODUgMTguMDQ0NyAxMy4xMDM4IDE4Ljc4NDQgMTAuNzQ2NEMxOC45MDg0IDEwLjM1MTIgMTkuMzI5MyAxMC4xMzEzIDE5LjcyNDUgMTAuMjU1M1oiIGZpbGw9IiM0YzQ4NDgiLz4gPC9nPiA8L2c+IDwvZz4KDTwvc3ZnPg==',
  ];

  // Star images
  const starImages = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTQuMzIgOS42OEwyMiA5LjY4TDE1Ljg0IDE0LjMybDE4IDE5LjYzTDEyIDE3TDYuMTYgMjIuNjNMOC4xNiAxNC4zMkwyIDkuNjhIOSw2OFoiIGZpbGw9IiNmZmZmMDAiLz4KPC9zdmc+Cg==',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIgMTQuMzIgOS42OCAyMiA5LjY4IDE1Ljg0IDE0LjMyIDE4IDIyIDEyIDE3IDYgMjIgOC4xNiAxNC4zMiAyIDkuNjggOS42OCA5LjY4IDEyIDJaIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPgo=',
  ];

  // Flower images
  const flowerImages = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjEyIiBjeT0iNiIgcng9IjMiIHJ5PSI1IiBmaWxsPSIjZmY5OWNjIi8+CjxlbGxpcHNlIGN4PSIxOCIgY3k9IjEyIiByeD0iNSIgcnk9IjMiIGZpbGw9IiNmZjk5Y2MiLz4KPGVsbGlwc2UgY3g9IjEyIiBjeT0iMTgiIHJ4PSIzIiByeT0iNSIgZmlsbD0iI2ZmOTljYyIvPgo8ZWxsaXBzZSBjeD0iNiIgY3k9IjEyIiByeD0iNSIgcnk9IjMiIGZpbGw9IiNmZjk5Y2MiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgZmlsbD0iI2ZmZmYwMCIvPgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjEyIiBjeT0iNiIgcng9IjMiIHJ5PSI1IiBmaWxsPSIjZmZmZmZmIi8+CjxlbGxpcHNlIGN4PSIxOCIgY3k9IjEyIiByeD0iNSIgcnk9IjMiIGZpbGw9IiNmZmZmZmYiLz4KPGVsbGlwc2UgY3g9IjEyIiBjeT0iMTgiIHJ4PSIzIiByeT0iNSIgZmlsbD0iI2ZmZmZmZiIvPgo8ZWxsaXBzZSBjeD0iNiIgY3k9IjEyIiByeD0iNSIgcnk9IjMiIGZpbGw9IiNmZmZmZmYiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgZmlsbD0iI2ZmZmYwMCIvPgo8L3N2Zz4K',
  ];

  // Diamond/crystal images
  const diamondImages = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgM0gxOEwyMCA5TDEyIDIxTDQgOUw2IDNaIiBmaWxsPSIjZDBmNGZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNMTIgM0wxMiAyMU02IDNMMTggM000IDlMMjAgOSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+Cg==',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTYgOEwxMiAxNkw4IDhMMTIgMloiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+Cg==',
  ];

  // Butterfly images
  const butterflyImages = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjgiIGN5PSI4IiByeD0iNCIgcnk9IjYiIGZpbGw9IiNmZjk5Y2MiLz4KPGVsbGlwc2UgY3g9IjE2IiBjeT0iOCIgcng9IjQiIHJ5PSI2IiBmaWxsPSIjZmY5OWNjIi8+CjxlbGxpcHNlIGN4PSI4IiBjeT0iMTYiIHJ4PSIzIiByeT0iNCIgZmlsbD0iI2ZmOTljYyIvPgo8ZWxsaXBzZSBjeD0iMTYiIGN5PSIxNiIgcng9IjMiIHJ5PSI0IiBmaWxsPSIjZmY5OWNjIi8+CjxsaW5lIHgxPSIxMiIgeTE9IjQiIHgyPSIxMiIgeTI9IjIwIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjEuNSIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjgiIGN5PSI4IiByeD0iNCIgcnk9IjYiIGZpbGw9IiNmZmZmZmYiLz4KPGVsbGlwc2UgY3g9IjE2IiBjeT0iOCIgcng9IjQiIHJ5PSI2IiBmaWxsPSIjZmZmZmZmIi8+CjxlbGxpcHNlIGN4PSI4IiBjeT0iMTYiIHJ4PSIzIiByeT0iNCIgZmlsbD0iI2ZmZmZmZiIvPgo8ZWxsaXBzZSBjeD0iMTYiIGN5PSIxNiIgcng9IjMiIHJ5PSI0IiBmaWxsPSIjZmZmZmZmIi8+CjxsaW5lIHgxPSIxMiIgeTE9IjQiIHgyPSIxMiIgeTI9IjIwIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjEuNSIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K',
  ];

  const imageSets = {
    snowflakes: {
      name: 'Snowflakes Collection',
      images: snowImages,
      labels: ['Classic Snowflake', 'Sparkling Snow'],
    },
    hearts: {
      name: 'Hearts Collection',
      images: heartImages,
      labels: ['Pink Heart', 'White Heart'],
    },
    stars: {
      name: 'Stars Collection',
      images: starImages,
      labels: ['Golden Star', 'White Star'],
    },
    flowers: {
      name: 'Flowers Collection',
      images: flowerImages,
      labels: ['Pink Flower', 'White Flower'],
    },
    diamonds: {
      name: 'Crystals & Diamonds',
      images: diamondImages,
      labels: ['Blue Crystal', 'White Diamond'],
    },
    butterflies: {
      name: 'Butterflies Collection',
      images: butterflyImages,
      labels: ['Pink Butterfly', 'White Butterfly'],
    },
  };

  const updateConfig = (updates: Partial<typeof config>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
    // Force re-render when image selection changes
    if (updates.selectedImageSet || updates.useCustomImages) {
      setForceUpdate((prev) => prev + 1);
    }
  };

  // Force re-render state for image changes
  const [forceUpdate, setForceUpdate] = useState(0);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
      alert('Configuration copied to clipboard!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Configuration copied to clipboard!');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (fallbackErr) {
        alert('Failed to copy configuration');
      }
      document.body.removeChild(textArea);
    }
  };

  // Default configuration for reset functionality
  const defaultConfig = {
    snowflakeCount: 100,
    useCustomImages: false,
    selectedImageSet: 'snowflakes' as keyof typeof imageSets,
    speed: { min: 1, max: 3 },
    wind: { min: -1, max: 1 },
    size: { min: 15, max: 25 },
    opacity: { min: 0.3, max: 0.8 },
    rotation: { enabled: true, speed: { min: -2, max: 2 } },
    colors: ['#ffffff', '#e6f3ff', '#cce7ff'],
    fps: 60,
    snowflakeShape: 'dot' as 'circle' | 'star' | 'dot',
    fadeEdges: true,
    followMouse: false,
    gravity: 1,
    bounce: false,
    melt: false,
    accumulate: false,
    zIndex: 1000,
  };

  // Generate dynamic code based on current settings
  const generateCurrentCode = () => {
    const props: string[] = [];

    // Check if using custom images
    if (config.useCustomImages) {
      const selectedImages = imageSets[config.selectedImageSet].images;
      props.push(
        `  images={[\n    ${selectedImages
          .map((img) => `'${img}'`)
          .join(',\n    ')}\n  ]}`
      );
    }

    // Add non-default properties
    if (config.snowflakeCount !== defaultConfig.snowflakeCount) {
      props.push(`  snowflakeCount={${config.snowflakeCount}}`);
    }

    if (
      config.speed.min !== defaultConfig.speed.min ||
      config.speed.max !== defaultConfig.speed.max
    ) {
      props.push(
        `  speed={{ min: ${config.speed.min}, max: ${config.speed.max} }}`
      );
    }

    if (
      config.wind.min !== defaultConfig.wind.min ||
      config.wind.max !== defaultConfig.wind.max
    ) {
      props.push(
        `  wind={{ min: ${config.wind.min}, max: ${config.wind.max} }}`
      );
    }

    if (
      config.size.min !== defaultConfig.size.min ||
      config.size.max !== defaultConfig.size.max
    ) {
      props.push(
        `  size={{ min: ${config.size.min}, max: ${config.size.max} }}`
      );
    }

    if (
      config.opacity.min !== defaultConfig.opacity.min ||
      config.opacity.max !== defaultConfig.opacity.max
    ) {
      props.push(
        `  opacity={{ min: ${config.opacity.min}, max: ${config.opacity.max} }}`
      );
    }

    if (config.rotation.enabled !== defaultConfig.rotation.enabled) {
      if (config.rotation.enabled) {
        if (
          config.rotation.speed.min !== defaultConfig.rotation.speed.min ||
          config.rotation.speed.max !== defaultConfig.rotation.speed.max
        ) {
          props.push(
            `  rotation={{ enabled: true, speed: { min: ${config.rotation.speed.min}, max: ${config.rotation.speed.max} } }}`
          );
        } else {
          props.push(`  rotation={{ enabled: true }}`);
        }
      } else {
        props.push(`  rotation={{ enabled: false }}`);
      }
    } else if (
      config.rotation.enabled &&
      (config.rotation.speed.min !== defaultConfig.rotation.speed.min ||
        config.rotation.speed.max !== defaultConfig.rotation.speed.max)
    ) {
      props.push(
        `  rotation={{ speed: { min: ${config.rotation.speed.min}, max: ${config.rotation.speed.max} } }}`
      );
    }

    if (
      JSON.stringify(config.colors) !== JSON.stringify(defaultConfig.colors)
    ) {
      props.push(`  colors={${JSON.stringify(config.colors)}}`);
    }

    if (config.fps !== defaultConfig.fps) {
      props.push(`  fps={${config.fps}}`);
    }

    if (config.snowflakeShape !== defaultConfig.snowflakeShape) {
      props.push(`  snowflakeShape="${config.snowflakeShape}"`);
    }

    if (config.fadeEdges !== defaultConfig.fadeEdges) {
      props.push(`  fadeEdges={${config.fadeEdges}}`);
    }

    if (config.followMouse !== defaultConfig.followMouse) {
      props.push(`  followMouse={${config.followMouse}}`);
    }

    if (config.gravity !== defaultConfig.gravity) {
      props.push(`  gravity={${config.gravity}}`);
    }

    if (config.bounce !== defaultConfig.bounce) {
      props.push(`  bounce={${config.bounce}}`);
    }

    if (config.melt !== defaultConfig.melt) {
      props.push(`  melt={${config.melt}}`);
    }

    if (config.accumulate !== defaultConfig.accumulate) {
      props.push(`  accumulate={${config.accumulate}}`);
    }

    if (config.zIndex !== defaultConfig.zIndex) {
      props.push(`  zIndex={${config.zIndex}}`);
    }

    if (props.length === 0) {
      return '<Snowfall />';
    }

    return `<Snowfall\n${props.join('\n')}\n/>`;
  };

  const resetToDefault = () => {
    setConfig(defaultConfig);
    setForceUpdate((prev) => prev + 1);
  };

  const tabs = [
    { id: 'basic', label: 'Basic' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'physics', label: 'Physics' },
    { id: 'effects', label: 'Effects' },
    { id: 'code', label: 'Code Examples' },
  ];

  const renderSlider = (
    label: string,
    value: number,
    min: number,
    max: number,
    step: number = 1,
    onChange: (value: number) => void
  ) => (
    <div className='space-y-2'>
      <label className='block text-sm font-medium text-white'>
        {label}: {value}
      </label>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className='slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20'
      />
    </div>
  );

  const renderRangeSlider = (
    label: string,
    range: { min: number; max: number },
    min: number,
    max: number,
    step: number = 1,
    onChange: (range: { min: number; max: number }) => void
  ) => (
    <div className='space-y-2'>
      <label className='block text-sm font-medium text-white'>
        {label}: {range.min.toFixed(1)} - {range.max.toFixed(1)}
      </label>
      <div className='space-y-1'>
        <input
          type='range'
          min={min}
          max={max}
          step={step}
          value={range.min}
          onChange={(e) =>
            onChange({ ...range, min: parseFloat(e.target.value) })
          }
          className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20'
        />
        <input
          type='range'
          min={min}
          max={max}
          step={step}
          value={range.max}
          onChange={(e) =>
            onChange({ ...range, max: parseFloat(e.target.value) })
          }
          className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20'
        />
      </div>
    </div>
  );

  const renderCheckbox = (
    label: string,
    checked: boolean,
    onChange: (checked: boolean) => void
  ) => (
    <label className='flex cursor-pointer items-center space-x-2 text-white'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className='h-4 w-4 rounded border-white/30 bg-white/20 text-blue-600 focus:ring-blue-500'
      />
      <span className='text-sm font-medium'>{label}</span>
    </label>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className='space-y-4'>
            {renderSlider(
              'Snowflake Count',
              config.snowflakeCount,
              10,
              500,
              10,
              (value) => updateConfig({ snowflakeCount: value })
            )}

            {renderSlider('FPS', config.fps, 15, 120, 5, (value) =>
              updateConfig({ fps: value })
            )}

            <div className='space-y-2'>
              <label className='block text-sm font-medium text-white'>
                Snowflake Shape
              </label>
              <select
                value={config.snowflakeShape}
                onChange={(e) =>
                  updateConfig({
                    snowflakeShape: e.target.value as 'circle' | 'star' | 'dot',
                  })
                }
                className='w-full rounded-md border border-white/30 bg-white/20 p-2'>
                <option value='circle'>Circle</option>
                <option value='star'>Star</option>
                <option value='dot'>Dot</option>
              </select>
            </div>

            {renderCheckbox(
              'Use Custom Images',
              config.useCustomImages,
              (checked) => updateConfig({ useCustomImages: checked })
            )}

            {config.useCustomImages && (
              <div className='space-y-3'>
                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-white'>
                    Select Image Collection:
                  </label>
                  <select
                    value={config.selectedImageSet}
                    onChange={(e) =>
                      updateConfig({
                        selectedImageSet: e.target
                          .value as keyof typeof imageSets,
                      })
                    }
                    className='w-full rounded-md border border-white/30 bg-white/20 p-2'>
                    <option value='snowflakes'>
                      {imageSets.snowflakes.name}
                    </option>
                    <option value='hearts'>{imageSets.hearts.name}</option>
                    <option value='stars'>{imageSets.stars.name}</option>
                    <option value='flowers'>{imageSets.flowers.name}</option>
                    <option value='diamonds'>{imageSets.diamonds.name}</option>
                    <option value='butterflies'>
                      {imageSets.butterflies.name}
                    </option>
                  </select>
                </div>
                <div className='rounded-lg border border-green-400/30 bg-white/10 p-3'>
                  <p className='mb-2 text-xs text-green-300'>
                    ✨ Using {imageSets[config.selectedImageSet].name} (
                    {imageSets[config.selectedImageSet].images.length} images)
                  </p>
                  <div className='space-y-1 text-xs text-white/70'>
                    {imageSets[config.selectedImageSet].labels.map(
                      (label, index) => (
                        <p key={index}>• {label}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'appearance':
        return (
          <div className='space-y-4'>
            {renderRangeSlider('Size Range', config.size, 5, 50, 1, (size) =>
              updateConfig({ size })
            )}

            {renderRangeSlider(
              'Opacity Range',
              config.opacity,
              0.1,
              1,
              0.1,
              (opacity) => updateConfig({ opacity })
            )}

            {renderCheckbox(
              'Enable Rotation',
              config.rotation.enabled,
              (enabled) =>
                updateConfig({ rotation: { ...config.rotation, enabled } })
            )}

            {config.rotation.enabled &&
              renderRangeSlider(
                'Rotation Speed',
                config.rotation.speed,
                -5,
                5,
                0.1,
                (speed) =>
                  updateConfig({ rotation: { ...config.rotation, speed } })
              )}

            {renderCheckbox('Fade Edges', config.fadeEdges, (fadeEdges) =>
              updateConfig({ fadeEdges })
            )}

            {renderSlider('Z-Index', config.zIndex, 0, 9999, 100, (zIndex) =>
              updateConfig({ zIndex })
            )}
          </div>
        );

      case 'physics':
        return (
          <div className='space-y-4'>
            {renderRangeSlider(
              'Fall Speed',
              config.speed,
              0.1,
              10,
              0.1,
              (speed) => updateConfig({ speed })
            )}

            {renderRangeSlider('Wind Speed', config.wind, -5, 5, 0.1, (wind) =>
              updateConfig({ wind })
            )}

            {renderSlider('Gravity', config.gravity, 0.1, 3, 0.1, (gravity) =>
              updateConfig({ gravity })
            )}

            {renderCheckbox('Bounce', config.bounce, (bounce) =>
              updateConfig({ bounce })
            )}

            {renderCheckbox('Accumulate', config.accumulate, (accumulate) =>
              updateConfig({ accumulate })
            )}

            {renderCheckbox('Melt', config.melt, (melt) =>
              updateConfig({ melt })
            )}
          </div>
        );

      case 'effects':
        return (
          <div className='space-y-4'>
            {renderCheckbox('Follow Mouse', config.followMouse, (followMouse) =>
              updateConfig({ followMouse })
            )}

            <div className='space-y-2'>
              <label className='block text-sm font-medium text-white'>
                Colors
              </label>
              <div className='grid grid-cols-3 gap-2'>
                {config.colors.map((color, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-2'>
                    <input
                      type='color'
                      value={color}
                      onChange={(e) => {
                        const newColors = [...config.colors];
                        newColors[index] = e.target.value;
                        updateConfig({ colors: newColors });
                      }}
                      className='h-8 w-8 rounded border border-white/30'
                    />
                    <button
                      onClick={() => {
                        const newColors = config.colors.filter(
                          (_, i) => i !== index
                        );
                        updateConfig({ colors: newColors });
                      }}
                      className='text-sm text-red-400 hover:text-red-300'>
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  updateConfig({ colors: [...config.colors, '#ffffff'] })
                }
                className='rounded border border-white/30 bg-white/20 px-3 py-1 text-sm text-white hover:bg-white/30'>
                Add Color
              </button>
            </div>
          </div>
        );

      case 'code':
        return (
          <div className='space-y-4'>
            {/* Current Settings Card */}
            <div className='rounded-md bg-gray-900/50 p-3'>
              <pre className='overflow-x-auto text-sm text-green-400'>
                <code>{generateCurrentCode()}</code>
              </pre>
            </div>
            <div className='mt-2 flex gap-2'>
              <button
                onClick={() => copyToClipboard(generateCurrentCode())}
                className='rounded bg-blue-500/80 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600/80'>
                Copy Code
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-blue-600'>
      {/* Snowfall Effect */}
      <Snowfall
        key={`snowfall-${config.useCustomImages}-${config.selectedImageSet}-${forceUpdate}`}
        snowflakeCount={config.snowflakeCount}
        images={
          config.useCustomImages
            ? imageSets[config.selectedImageSet].images
            : undefined
        }
        speed={config.speed}
        wind={config.wind}
        size={config.size}
        opacity={config.opacity}
        rotation={config.rotation}
        colors={config.colors}
        fps={config.fps}
        snowflakeShape={config.snowflakeShape}
        fadeEdges={config.fadeEdges}
        followMouse={config.followMouse}
        gravity={config.gravity}
        bounce={config.bounce}
        melt={config.melt}
        accumulate={config.accumulate}
        zIndex={config.zIndex}
        className='custom-snowfall'
      />

      {/* Demo Content */}
      <div className='relative z-20 p-4 lg:p-8'>
        <h1 className='mb-8 text-center text-4xl font-bold text-white'>
          Snowfall Effect ❄️
        </h1>

        <div className='mx-auto grid max-w-4xl gap-6 lg:grid-cols-3'>
          {/* Controls Panel */}
          <div className='lg:col-span-1'>
            <div className='overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-md'>
              {/* Tabs */}
              <div className='flex flex-wrap border-b border-white/20'>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className='max-h-96 overflow-y-auto p-6'>
                {renderTabContent()}
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className='space-y-6 lg:col-span-2'>
            <div className='rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md'>
              <h2 className='mb-4 text-xl font-semibold text-white'>
                Current Settings
              </h2>
              <div className='grid gap-4 text-sm text-white/80 md:grid-cols-2'>
                <div>
                  <p>
                    <strong>Count:</strong> {config.snowflakeCount}
                  </p>
                  <p>
                    <strong>Shape:</strong> {config.snowflakeShape}
                  </p>
                  <p>
                    <strong>FPS:</strong> {config.fps}
                  </p>
                  <p>
                    <strong>Gravity:</strong> {config.gravity}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Size:</strong> {config.size.min}-{config.size.max}
                  </p>
                  <p>
                    <strong>Speed:</strong> {config.speed.min}-
                    {config.speed.max}
                  </p>
                  <p>
                    <strong>Wind:</strong> {config.wind.min}-{config.wind.max}
                  </p>
                  <p>
                    <strong>Colors:</strong> {config.colors.length}
                  </p>
                  <p>
                    <strong>Images:</strong>{' '}
                    {config.useCustomImages ? (
                      <span className='text-green-300'>
                        ✨ {imageSets[config.selectedImageSet].name}
                      </span>
                    ) : (
                      <span className='text-white/60'>Default Shapes</span>
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={resetToDefault}
                className='rounded bg-red-500/80 px-3 py-1 mt-2 text-sm text-white transition-colors hover:bg-red-600/80'>
                Reset to Default
              </button>
            </div>

            <div className='rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md'>
              <h2 className='mb-4 text-xl font-semibold text-white'>
                Features
              </h2>
              <div className='grid gap-2 text-sm text-white/80 md:grid-cols-2'>
                <div className='space-y-1'>
                  <p>✅ React 19 Compatible</p>
                  <p>✅ Next.js Ready</p>
                  <p>✅ TypeScript Support</p>
                  <p>✅ Custom Images</p>
                  <p>✅ Multiple Shapes</p>
                </div>
                <div className='space-y-1'>
                  <p>✅ Physics Simulation</p>
                  <p>✅ Mouse Interaction</p>
                  <p>✅ Performance Optimized</p>
                  <p>✅ Fully Customizable</p>
                  <p>✅ Mobile Friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href='https://github.com/namnguyenthanhwork/react-snowfall-effect'
        className='absolute top-0 right-0 text-white z-[999]'
        aria-label='View source on GitHub'>
        <svg
          width='80'
          height='80'
          viewBox='0 0 250 250'
          aria-hidden='true'>
          <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z'></path>
          <path
            d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
            fill='currentColor'
            className='octo-arm'
            style={{ transformOrigin: '130px 106px' }}></path>
          <path
            d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
            fill='currentColor'></path>
        </svg>
      </a>
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default SnowfallDemo;
