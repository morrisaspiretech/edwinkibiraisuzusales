@echo off
REM Edwin Isuzu — Auto Blog Publisher
REM This runs every 3 days via Windows Task Scheduler

curl -s "http://localhost:3000/api/blog/auto?secret=edwinkibira_blog_auto_2026" > "%TEMP%\blog_result.txt" 2>&1
type "%TEMP%\blog_result.txt"
echo.
echo Blog auto-publish ran at %DATE% %TIME% >> "%USERPROFILE%\blog-publish-log.txt"
