'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell } from 'recharts'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

const pieData = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function Dashboard() {
  const [messages, setMessages] = React.useState([
    { text: "Hello! How can I assist you today?", sender: "ai" }
  ])
  const [input, setInput] = React.useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      // Here you would typically send the message to your AI backend
      // and then add the AI's response to the messages
      setInput("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <h1 className="text-lg font-semibold">AI Dashboard</h1>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>ASX:200</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Chat with AI</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] mb-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg ${
                      message.sender === 'user' ? 'bg-primary text-primary-foreground ml-auto' : 'bg-muted'
                    } max-w-[80%] w-fit`}
                  >
                    {message.text}
                  </div>
                ))}
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend}>Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}