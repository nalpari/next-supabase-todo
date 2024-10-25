'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"

export function LoginPageComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">로그인</CardTitle>
          <CardDescription className="text-center">
            계정에 로그인하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" required />
          </div>
          <Button className="w-full" type="submit">
            로그인
          </Button>
          <div className="text-sm text-center">
            <a href="#" className="text-primary hover:underline">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">또는 계속하기</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="text-sm text-center">
            계정이 없으신가요?{" "}
            <a href="#" className="text-primary hover:underline">
              회원가입
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}