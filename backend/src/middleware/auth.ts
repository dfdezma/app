import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function auth(req: Request, res: Response, next: NextFunction) {
  const h = req.headers.authorization;
  if (!h) return res.status(401).json({ error: 'No auth header' });
  const token = h.replace('Bearer ', '');
  try {
    const payload:any = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).userId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}
